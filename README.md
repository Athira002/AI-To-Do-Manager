# AI To-Do Manager

A simple and smart To-Do Manager built with **React**.  
The app allows users to manage their tasks, and it also integrates with an AI API for intelligent task suggestions.

---

## ✨ Features
- ✅ Add, edit, and delete tasks
- 📋 Mark tasks as completed
- 🤖 AI-powered task suggestions (requires API key)
- 🎨 Simple and clean UI

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ai-todo-manager.git
cd ai-todo-manager
```
### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

This project requires an API key for AI suggestions.
For security reasons, the key is not included in the repository.

Create a .env file in the root directory based on .env.example.

Add your API key there. Example:
```env
REACT_APP_API_KEY=your_api_key_here
```
⚠️ If you don’t add an API key, you may see a popup:
“AI suggestion failed. Check API key.”
This is expected and does not affect the rest of the app’s functionality.

### 4. Start the development server
```bash
npm start
```
The app will be available at http://localhost:3000
.

## 📂 Project Structure
```bash
src/
 ├── components/     # Reusable components
 ├── App.js          # Main application file
 ├── index.js        # Entry point
 ├── styles.css      # Styling
 ├── .env.example    # Example environment variables
```

## 🔑 Notes for Reviewers (Recruiters / Interviewers)

-The app demonstrates React, state management, and API integration.
-API key is intentionally excluded for security reasons.
-If you want to test the AI feature, simply add your own API key in .env.
-Without a key, the app still runs with all basic To-Do features.

## 🛠️ Tech Stack

Frontend: React, CSS

Package Manager: npm

API: AI integration (via API key in .env)
