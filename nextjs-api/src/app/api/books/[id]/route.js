import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

//Validation schema to validate client requests.
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  published_year: yup.number().required("Public Year is required"),
});

export async function PUT(req, { params }) {
  try {
    const bookId = parseInt(params.id); // get URI params field;
    const body = await req.json();
    const validatedData = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });
    await prisma.book.update({
      where: { id: bookId },
      data: validatedData,
    });
    return NextResponse.json({
      message: "Book is successfully updated.",
      bookId,
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
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const bookId = parseInt(params.id); // get URI params field;
  try {
    await prisma.book.delete({
      where: { id: bookId },
    });

    return NextResponse.json({
      message: "Book is successfully deleted",
      bookId,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Student not dound or Student deletion is fail.",
      },
      {
        status: 404,
      }
    );
  }
}

export async function GET(req, { params }) {
  const bookId = parseInt(params.id); // get URI params field;
  const book = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });
  // const book = {
  // title: "Power ranger",
  // author: "Ash",
  // publicyear: "1954"
  // };
  return NextResponse.json({
    message: "Book detail is successfully get",
    book,
  });
}
