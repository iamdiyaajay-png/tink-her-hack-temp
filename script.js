// 1. PROJECT STATE & CONFIGURATION
let currentJob = "";
let qIndex = 0;
let score = 0;
let timerInterval;
let difficulty = { time: 25, strict: 40 }; // Default settings
let activeQuestions = [];

// Question Pools by Category
const questionPool = [
    "As a ${job}, how do you handle a massive system failure?",
    "Why should this board trust you as an elite ${job}?",
    "What is the biggest ethical challenge currently facing a ${job}?",
    "Describe a time you lead a ${job}-related project under extreme pressure.",
    "How do you ensure your work as a ${job} meets global boardroom standards?",
    "What is the most disruptive technology currently impacting ${job} roles?",
    "How do you handle a cross-functional team that disagrees with your ${job} strategy?"
];

// 2. SPEECH RECOGNITION SETUP
const SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechAPI();
recognition.continuous = true;
recognition.interimResults = true;

recognition.onresult = (event) => {
    let text = "";
    for (let i = event.resultIndex; i < event.results.length; ++i) {
        text += event.results[i][0].transcript;
    }
    document.getElementById('live-transcript').innerText = text;
};

// 3. NAVIGATION & UI HELPERS
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

// 4. PATH LOGIC: SKILL MATCHER (For Unsure Path)
function matchCareer() {
    const s = document.getElementById('skills-input').value.toLowerCase();
    let job = "Strategic Consultant"; // Default

    if (s.includes("code") || s.includes("python") || s.includes("dev")) job = "Software Engineer";
    else if (s.includes("sale") || s.includes("market") || s.includes("talk")) job = "Sales Director";
    else if (s.includes("design") || s.includes("art") || s.includes("draw")) job = "Creative Architect";
    else if (s.includes("math") || s.includes("data") || s.includes("logic")) job = "Data Analyst";

    currentJob = job;
    document.getElementById('suggested-job-text').innerText = `CEO Suggestion: ${job}`;
    document.getElementById('career-suggestion-box').classList.remove('hidden');
}

// 5. INTERVIEW INITIALIZATION
function analyzeJob(fromUnsure = false) {
    if (!fromUnsure) {
        currentJob = document.getElementById('job-input').value;
    }
    
    if (!currentJob) return alert("Please specify a job or skills first!");

    // Set Difficulty Parameters
    const level = document.getElementById('difficulty-level').value;
    if (level === "easy") difficulty = { time: 40, strict: 20 };
    else if (level === "hard") difficulty = { time: 15, strict: 70 };
    else difficulty = { time: 25, strict: 40 };

    // Shuffle Questions and pick a fresh set of 5
    activeQuestions = [...questionPool]
        .sort(() => Math.random() - 0.5) 
        .slice(0, 5)
        .map(q => q.replace(/\${job}/g, currentJob));

    qIndex = 0; 
    score = 0;
    showScreen('interview-screen');
    askQuestion();
}

// 6. CORE INTERVIEW ENGINE
function askQuestion() {
    if (qIndex >= activeQuestions.length) return endInterview();
    
    // Reset UI for new question
    document.getElementById('live-transcript').innerText = "Waiting for speech...";
    document.getElementById('timer-bar').style.width = "100%";
    document.getElementById('ceo-img').src = "neutral.png";
    document.getElementById('ai-status').innerText = "READY";
    
    document.getElementById('question-text').innerText = activeQuestions[qIndex];
}

function startTimer(sec) {
    clearInterval(timerInterval);
    let timeLeft = sec;
    const bar = document.getElementById('timer-bar');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        bar.style.width = (timeLeft / sec) * 100 + "%";
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            stopMic(); // Automatically cut off and grade
        }
    }, 1000);
}

function startMic() {
    try {
        recognition.start();
        startTimer(difficulty.time);
        document.getElementById('ai-status').innerText = "LISTENING...";
    } catch(e) { console.log("Mic busy"); }
}

function stopMic() {
    clearInterval(timerInterval);
    recognition.stop();
    document.getElementById('ai-status').innerText = "ANALYZING...";

    const ans = document.getElementById('live-transcript').innerText.toLowerCase();

    // Evaluation Logic: Answer must be long enough AND mention a keyword from the job
    const jobKey = currentJob.toLowerCase().split(' ')[0];
    if (ans.length > difficulty.strict && ans.includes(jobKey)) {
        score += 20;
        document.getElementById('ceo-img').src = "happy.png";
        document.getElementById('ai-status').innerText = "EXCELLENT";
    } else {
        document.getElementById('ceo-img').src = "angry.png";
        document.getElementById('ai-status').innerText = "UNSATISFACTORY";
    }

    qIndex++;
    // Wait 3 seconds to let the user see the CEO's reaction before next question
    setTimeout(askQuestion, 3000);
}

// 7. FINAL VERDICT & FEEDBACK
function endInterview() {
    showScreen('result-screen');
    const resultBox = document.getElementById('final-score');
    const status = score >= 75 ? "RECOMMENDED" : "REJECTED";
    const statusColor = score >= 75 ? "#2ecc71" : "#ff4d4d";

    resultBox.innerHTML = `
        <h1 style="color: ${statusColor}">${status}</h1>
        <p>Your Final Board Score: ${score}%</p>
        <div class="feedback-box">
            <p><strong>Positives:</strong> Demonstrated interest in the ${currentJob} industry and engaged with the CEO.</p>
            <p><strong>Negatives:</strong> ${score < 75 ? "Failed to meet the 75% threshold. Your answers lacked technical depth or exceeded the time limit." : "Exceeded expectations. Very few technical gaps found."}</p>
        </div>
        <div class="final-actions">
            <button onclick="location.reload()">HOME</button>
            <button onclick="analyzeJob(true)">RETRY INTERVIEW</button>
        </div>
    `;
}