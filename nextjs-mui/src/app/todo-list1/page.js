"use client";

import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function TodoList() {
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

  console.log("changedTask: ", changedTask);
  console.log("taskIndex", taskIndex);

  return (
    <div>
      <Box
        component="form"
        sx={{ mt: 5, mx: "auto", width: "80%" ,display: "flex" }}
      >
        <TextField
          label="Task Name"
          sx={{ pr: 2 }}
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <Button variant="contained" onClick={addTask}>
          Add task
        </Button>
      </Box>

      {taskIndex != null || taskIndex != undefined ? (
        <Box
          component="form"
          sx={{ display: "flex", mt: 10 , mb: 10}}
        >
          <TextField
            label="Task Name"
            sx={{ pr: 2 }}
            value={changedTask}
            onChange={(e) => setChangedTask(e.target.value)}
          />

          <Button variant="contained" onClick={updateTask} sx={{mr: 2}}>
            Update
          </Button>

          <Button variant="contained" onClick={() => {
            setTaskIndex(null);
            setChangedTask(null);
          }} sx={{bgcolor: "red"}}>
            Cancel
          </Button>


        </Box>
      ) : null}

      <Paper sx={{ maxHeight: 400, overflow: "auto" }}>
        <Table stickyHeader> 
          <TableHead sx={{position: "sticky"}}>
            
            <TableRow sx={{position: "sticky"}}>
              <TableCell>#</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tasks.map((task, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="index">
                {index.name}
              </TableCell>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{task}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {setTaskIndex(index); setChangedTask(task);
                      
                    }}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeTask(index)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
