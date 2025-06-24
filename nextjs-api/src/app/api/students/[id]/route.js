import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

//Validation schema to validate client requests.
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  father_name: yup.string().required("Father Name is required"),
  gender: yup
    .string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Invalid Gender"),

  age: yup.number().required("Age is required"),
  dob: yup.date().required("DOB is required"),
  phone: yup.string().required("Phone is required"),
  address: yup.string().required("Address is required"),
  major: yup.string().required("Major is required"),
});

//Update student API
export async function PUT(req, { params }) {
  try {
    const studentId = parseInt(params.id); // get URI params field; // param id ka string phyit loh int change pay
    const body = await req.json();
    const validatedData = await schema.validate(body, { 
      abortEarly: false, 
      stripUnknown: true,
     }); //Call Validation Schema
     await prisma.student.update({
      where: {id: studentId},
      data: validatedData,
     });
    return NextResponse.json({
      message: "Student is successfully updated.",
      studentId,

    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          message: "validation failed",
          errors: error.inner.map((e) => ({
            path: e.path,
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: "Unexpected error",
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}

// Delete Student API
export async function DELETE(req, { params }) {
       const studentId = parseInt(params.id); // get URI params field;
  try {
    await prisma.student.delete({
      where: { id: studentId},
    });
    
  return NextResponse.json({
    message: "Student is successfully deleted",
    studentId,
  });

  }catch (error) {
    return NextResponse.json({
      message: "Student not dound or Student deletion is fail."
    },
    {
      status: 404,
    }
  );
  }
}

//GET student detail API
export async function GET(req, { params }) {
  const studentId = parseInt(params.id); // get URI params field;

  //find student in database
  const student = await prisma.student.findUnique({
    where: {
      id: studentId,
    },
  });
  // const student = {
  //   id: studentId,
  //   name: "Su Su",
  //   age: 18,
  //   gender: "female",
  //   fatherName: "U Maung",
  //   address: "Hledan",
  //   major: "Computer Science",
  // };

  return NextResponse.json(student);
}
