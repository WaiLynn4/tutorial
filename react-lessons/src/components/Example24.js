"use client";

import styles from "./Example24.module.css";
import { useState } from "react";

// Example24: List , Create , Update , Delete
export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [changedTask, setChangedTask] = useState("");
  const [taskIndex, setTaskIndex] = useState();

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index != indexToRemove)
    );
  };

  const updateTask = () => {
    if (changedTask.trim()) {
      setTasks((prevTasks) => {
        return prevTasks.map((task, index) =>
          index == taskIndex ? changedTask : task
        );
      });
      setChangedTask(null);
      setTaskIndex(null);
    }
  };

  console.log('changedTask: ', changedTask);
  console.log('taskIndex', taskIndex)

  return (
    <div className={styles.container}>
      {/* Task Input to add new task */}
      <div>
        <input
          className={styles.taskInput}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className={styles.addTaskBtn} type="button" onClick={addTask}>
          Add Task
        </button>
      </div>
      {/* Task Input to Updat a Task */}
      {taskIndex != null || taskIndex != undefined ? (
        <div style={{ marginTop: 10 }}>
          <input
            className={styles.taskInput}
            value={changedTask}
            onChange={(e) => setChangedTask(e.target.value)}
          />
          <button
            className={styles.updateTaskBtn}
            type="button"
            onClick={updateTask}
          >
            Update Task
          </button>
          <button
            className={styles.cancelBtn}
            onClick={() => {
              setTaskIndex(null);
              setChangedTask(null);
            }}
          >
            Cancel
          </button>
        </div>
      ) : null}
      {/* Task List */}
      <ul className={styles.taskList}>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.taskName}>{task}</span>
              <button
                className={styles.editBtn}
                onClick={() => {
                  setTaskIndex(index);
                  setChangedTask(task);
                }}
              >
                Edit
              </button>
              <button
                className={styles.removeBtn}
                onClick={() => removeTask(index)}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
}
