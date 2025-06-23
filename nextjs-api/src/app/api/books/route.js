import { NextResponse } from "next/server";
import * as yup from "yup";


//Validation schema to validate client requests.
const schema = yup.object().shape({
  
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  publicyear: yup.number().required("Public Year is required"),

});

const  books= [
  {
    title: "The Lord of the Rings",
    author: "J R R Tolkien",
    publicyear: "1954"
  },

  {
   title: "The Lord of the Rings",
   author: "Andrzej Sapkowski",
   publicyear: "1954"

  },

];

export async function GET() {
  return NextResponse.json(books);
}


export async function POST(req) {
  const body = await req.json(); //Get requested body data from client
  console.log(body);

  return NextResponse.json({
    message: "Book is successfully created.",
    bodyData: body,
  });
}
