import { NextResponse } from "next/server";
import * as yup from "yup";

//Validation schema to validate client requests.
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  publicyear: yup.number().required("Public Year is required"),
  
});

export async function PUT (req, { params }) {
   try{ 
     const bookId = params.id; // get URI params field;
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
        message: "Book is successfully updated.",
        bookId,
        bodyData: body,
    });
   } catch(error) {
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


export async function DELETE(req, {params }) {
    const bookId = params.id;// get URI params field;
    return NextResponse.json({
        message: "Book is successfully deleted",
        bookId,
    });
    
}

export async function GET(req, {params }) {
    const bookId = params.id;// get URI params field;
    const book = {
    title: "Power ranger",
    author: "Ash",
    publicyear: "1954"
    };
    return NextResponse.json({
        message: 'Book detail is successfully get',
        book,
    });
    
}