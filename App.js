import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import { Configuration, OpenAI } from "openai";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load from LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, done: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  // AI Suggestion
  const suggestTasks = async () => {
    try {
      const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true, // For quick demo (not for production)
      });

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful task planner." },
          {
            role: "user",
            content: "Suggest 3 simple daily tasks for productivity.",
          },
        ],
      });

      const aiTasks = response.choices[0].message.content
        .split("\n")
        .filter((t) => t.trim())
        .map((t) => ({ text: t.replace(/^\d+\. /, ""), done: false }));

      setTasks([...tasks, ...aiTasks]);
    } catch (err) {
      console.error("AI Error:", err);
      alert("AI suggestion failed. Check API key.");
    }
  };

  return (
    <div className="app">
      <h1>AI-Powered To-Do Manager</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={suggestTasks} className="ai-btn">
          AI Suggest Tasks
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onToggle={() => toggleTask(index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
