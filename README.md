<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [SkillBoss] 🎯

## Basic Details

### Team Name: [Pixel Mafia]

### Team Members
- Member 1:[ Diya Ajay - Lourdes Matha College of Science and Technology]
- Member 2: [Jasmine.M - Lourdes Matha College of Science and Technology]

### Hosted Project Link
[https://iamdiyaajay-png.github.io/tink-her-hack-temp/]

### Project Description
SkillBoss is an AI-powered career architect that maps professional skills to ideal job roles through interactive discovery. It features a advanced, timed AI interviewer that evaluates candidate readiness, delivering a comprehensive performance audit of pros, cons, and targeted improvement areas to ensure  mastery of the skill or job.

### The Problem statement
Job seekers often face a "readiness gap" where they either struggle to map their existing skills to the right roles or fail to understand what skill their desired carrier has and enter interviews unprepared for high-pressure technical scrutiny. Existing platforms offer static job listings but fail to provide real-time, rigorous validation of a candidate's actual depth of knowledge.

### The Solution
SkillBoss bridges this gap by offering a dual-path career architect. Whether starting from a dream job or a specific skill set, users are asked to attend   a timed AI-simulated interview that goes beyond surface-level questions. The system delivers a comprehensive performance audit—highlighting pros, cons, and precise improvement areas—ensuring candidates are truly market-ready before they ever hit apply for a job.

---

## Technical Details

### Technologies/Components Used

**For Software:**
- Languages used: HTML5, CSS3, JavaScript (ES6+)
-  Libraries used: * Google Generative AI SDK: To communicate with the LLM.



## Features

List the key features of your project:
- Feature 1:[ Dual-Path Navigation: Flexible entry points where users can either select a Desired Job to see required skills or input their Current Skills to discover matching career paths.]
- Feature 2:[ Adaptive Skill Mapping: A dynamic database that connects industry-standard roles with the specific technical and soft skills required to succeed in them.]
- Feature 3:[ High-Pressure AI Interviewer: A sophisticated AI agent that conducts advanced-level interviews, simulating real-world technical and behavioral screening.]
- Feature 4:[Timed Response System: Every question includes a strict time limit to test the user's ability to think on their feet and perform under professional pressure.]
- Feature 5:[Comprehensive Performance Audit: Instead of a simple pass/fail, the system generates a detailed report featuring:

Pros: Specific strengths and correctly answered concepts.

Cons: Technical gaps or areas where the logic was weak.]

- Feature 6:[Gamified Mastery Tracking: A scoring system that benchmarks the user against industry requirements, encouraging iterative practice until they achieve professional proficiency.]

Improvement Roadmap: Actionable feedback on exactly what to study to reach market-ready standards.
---

## Implementation

### For Software:

#### Installation
```bash

```# Clone the repository
git clone https://github.com/your-username/boardroom-ai.git

# Navigate into the project folder
cd boardroom-ai

# If you are using a local development server (optional but recommended)
npm install live-server -g

#### Run
```bash
live-server

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b9bd1155-36c8-411e-811f-dc3c3953079e" />

[the home page which give user choice whether to choose desired job or search for job matching their skill.]

![Screenshot2]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b01d95de-0544-49be-83ce-e6bda3ba43e6" />

[choose the desired job and enter the difficulty level of interview.]

![Screenshot3]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d42cbfc1-1e98-423b-a570-f1707b861299" />

[where interview take place the interviewer checks our capabilities and our skills.]

![Screenshot4]<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/335e4300-2994-4eb8-87a8-9c898a6b1538" />

[our pros,cons,where to improve and score is displayed.]
#### Diagrams

**System Architecture:**

!Architecture Diagram<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/99bdae28-d3e8-400b-85ba-ef2eaf06134b" />

 Core ComponentsFrontend (React/Next.js): Manages the dual-path entry (Known Job vs. Career Discovery) and the interactive interview UI.Backend API (Node.js/Python): The "Brain" in your VS Code terminal that routes data between the UI, Database, and AI.AI Engine (Gemini/GPT): Generates "CEO Level" questions and provides real-time analytical feedback.Database (PostgreSQL/Supabase): Stores the job-skill mapping, user profiles, and interview transcripts.Data FlowInput: User selects a path  System fetches Required Skills or Career Matches from the DB.Interview Loop: Frontend sends job context to AI AI generates strategic questions User submits answers for scoring.Output: System aggregates scores  Displays Evaluation & Skills to Improve Offers Retry or Resource links. Tech Stack InteractionVS Code Workspace: Houses the /frontend (UI), /backend (Logic), and .env (API Keys).REST Integration: The Frontend calls Backend endpoints (e.g., /start-interview) to trigger AI prompts.State Management: React handles the "Step-by-Step" flow from Start to End/Home.

**Application Workflow:**

!<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/18e342f8-96ef-4d4c-adad-e103799c7a2d" />
(docs/workflow.png)
*Add caption explaining your workflow*
A seemless journey from desired carrier and skill mapping to carrier discovery using high stacks AI stimulation and executive level feedback.
---
## Project Demo

### Video
https://drive.google.com/file/d/1mIKurZ-YPq6tMUeDIt-fSvAwVE89qVZY/view?usp=drivesdk
The video demonstrates our topic how our website runs and what are the functions provided on our website.
### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:chatgpt, Gemini , Code

Purpose:

**Purpose:** [What you used it for]
System Architecture & Logic: Assisted in designing the dual-path workflow for career matching.

API Integration: Provided boilerplate code for connecting the Web Speech API and Gemini AI SDK.

Technical Documentation: Generated the system logic circuits, flowcharts, and MIT License documentation.

Debugging: Assisted in refining the "Hold to Speak" event logic for the microphone interface.


**Key Prompts Used:**
- "Create a system logic circuit for an AI interview app in PNG format."

"Write a JavaScript function to handle real-time speech-to-text using the Web Speech API."

"Design a flowchart for a user journey that branches between 'I know my career' and 'Suggest a career'."

"Draft an MIT License for two contributors named Diya Ajay and Jasmine.M."

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
Architecture Design: Defining the "Boardroom" concept and the specific user experience.

Custom Business Logic: Implementing the difficulty levels (Intern vs. Executive) and custom scoring rubrics.

UI/UX Design: Finalizing the "Boardroom" aesthetic and brand identity.

Integration & Testing: Connecting the frontend components and fine-tuning the AI's "CEO" persona.
*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- Diya AJAY: [Specific contributions - Focused on the UI/UX experience and frontend flow.]
- Jasmine.M: [Specific contributions -Focused on AI logic and backend integration]

---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
