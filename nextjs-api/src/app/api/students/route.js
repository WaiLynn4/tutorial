import { NextResponse } from "next/server";

const StudentData = [
  {
    name: "Su Su",
    age: 17,
    address: "Hlaing",
    major: "Computer Science",
  },

  {
    name: "Thu Thu",
    age: 17,
    address: "Hledan",
    major: "Computer Science",
  },

  {
    name: "Lu Lu",
    age: 17,
    address: "Insein",
    major: "Computer Science",
  },
];
export async function GET() {
  return NextResponse.json(StudentData);
}

export async function POST(req) {
  const body= await req.json(); //Get requested body data from client
  console.log(body);
  
  return NextResponse.json({ 
    message: "Student is successfully created.",
    bodyData: body,
  });
}
