"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const getStudentList = async () => {
    try {
      // console.log("getStudentList()");
      const response = await axios.get("/api/students");
      // console.log('API Response',response.data); // data htote kyi chin loh
      setStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("students", students);
  useEffect( ()=> {
    getStudentList();
    //console.log('Render' useEffect')

  },[])


  return (
    <Box sx={{ bgcolor: "yellow", p: 5 }}>
      <Stack alignItems="flex-end">
        <Link passHref href="/students/create">
          <Button variant="contained">ADD Student</Button>
        </Link>
      </Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Dob</TableCell>
              <TableCell>FatherName</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Major</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student, index) => (
               <TableRow key={student.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>{student.dob}</TableCell>
              <TableCell>{student.father_name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.gender}</TableCell>
              <TableCell>{student.address}</TableCell>
              <TableCell>{student.major}</TableCell>
              <TableCell align="center">
                <Link href={`/students/${student.id}`} passHref>
                  <IconButton sx={{ color: "green" }}>
                    <VisibilityIcon />
                  </IconButton>
                </Link>

                <Link href={`/students/${student.id}/edit`} passHref>
                  <IconButton sx={{ color: "blue" }}>
                    <EditIcon />
                  </IconButton>
                </Link>

                <IconButton sx={{ color: "red" }}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>

            ))}
           
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
