import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";


const  books= [
  {
    title: "The Lord of the Rings",
    author: "J R R Tolkien",
    published_year: "1954"
  },

  {
   title: "The Lord of the Rings",
   author: "Andrzej Sapkowski",
   published_year: "1954"

  },

];

export async function GET() {
   const books = await prisma.book.findMany();
  return NextResponse.json(books);
}



//Validation schema to validate client requests.
const schema = yup.object().shape({
  
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  published_year: yup.number().required("Public Year is required"),

});



export async function POST(req) {
  try{
    const body = await req.json(); //Get requested body data from client
      const validatedData = await schema.validate(body, { abortEarly: false});
        const book = await prisma.book.create({
          data: validatedData,
        });
  

  return NextResponse.json({
    message: "Book is successfully created.",
    book: book,
  });

  }catch (error) {
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
        error: error.message,
      },
      { status: 500 }
    );

  }
  
}
