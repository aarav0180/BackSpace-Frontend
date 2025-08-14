# Backspace: Your AI Coding Partner

## Overview

Backspace is an intelligent AI coding agent designed to streamline your development workflow directly within your GitHub repositories. From reading files to implementing changes, creating new branches, and opening pull requests, Backspace handles the tedious parts of coding, letting you focus on innovation.

-----

## How Backspace Works (The Magic Behind the Code)

Backspace integrates deeply with your GitHub workflow to act as your personal coding assistant:

1.  **Repository Access:** Using a provided Personal Access Token (PAT), Backspace securely forks your desired GitHub repository.
2.  **Command Interpretation:** You provide Backspace with natural language commands or code requests.
3.  **File Context & Analysis:** Backspace reads relevant files within your forked repository to understand the existing codebase and context.
4.  **Intelligent Modifications:** Based on your commands and its understanding of the code, Backspace intelligently makes the necessary changes to files.
5.  **Synchronization & Version Control:** Backspace ensures these changes are correctly synchronized.
6.  **New Branch Creation:** It pushes the updated code into a new, dedicated branch on your forked repository.
7.  **Pull Request Generation:** Finally, Backspace automatically opens a pull request (PR) to your original repository, detailing the changes made and allowing for easy review and merging.

**Note:** Backspace operates with both a public-facing frontend (this landing page, built with v0.dev) and a private, secure backend that handles the core AI logic and GitHub integrations.

-----

## Get Started (Run Locally)

To get a local copy of the Backspace landing page up and running, follow these simple steps.

### Prerequisites

You'll need Node.js and npm (Node Package Manager) installed on your machine.

  * **Node.js & npm:** Download and install from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aarav0180/BackSpace-Frontend.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd BackSpace-Frontend
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the App

To start the development server:

```bash
npm run dev
```

Once the server starts, open your web browser and navigate to:

**[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)**

You should now see the Backspace landing page running locally.

-----

## Screenshots

<img width="1847" height="902" alt="Screenshot 2025-08-02 210129" src="https://github.com/user-attachments/assets/cd888da4-b232-494a-8c7b-c41fbcfa3e1e" />
<img width="1856" height="900" alt="Screenshot 2025-08-02 210903" src="https://github.com/user-attachments/assets/9271c8a9-af88-4fe6-bd68-021e05c62005" />

-----

## See the working Demo here

**[demo on youtube](https://www.youtube.com/watch?v=gDtDMeCzbZw)**
