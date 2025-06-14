// app/todo-list/page.js
"use client";

import React, { useState } from "react";
import {
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
  Box,
} from "@mui/material";

export default function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrUpdate = () => {
    if (!taskName.trim()) return;

    if (editIndex !== null) {
      const updated = [...tasks];
      updated[editIndex] = taskName;
      setTasks(updated);
      setEditIndex(null);
    } else {
      setTasks([...tasks, taskName]);
    }

    setTaskName("");
  };

  const handleEdit = (index) => {
    setTaskName(tasks[index]);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    if (editIndex === index) {
      setEditIndex(null);
      setTaskName("");
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          label="Task Name"
          variant="outlined"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          onClick={handleAddOrUpdate}
        >
          {editIndex !== null ? "Update Task" : "Add Task"}
        </Button>
      </Box>

      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Task</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{task}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(index)}
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
