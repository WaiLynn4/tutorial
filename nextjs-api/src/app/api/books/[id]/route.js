import { NextResponse } from "next/server";

export async function PUT (req, { params }) {
    const bookId = params.id; // get URI params field;
    const body = await req.json();
    return NextResponse.json({
        message: "Book is successfully updated.",
        bookId,
        bodyData: body,
    });
}

export async function DELETE(req, {params }) {
    const bookId = params.id;// get URI params field;
    return NextResponse.json({
        message: "Student is successfully deleted",
        bookId,
    });
    
}

export async function GET(req, {params }) {
    const bookId = params.id;// get URI params field;
    const book = {
        id: bookId,
        name: "Su Su",
        age: 18,
        gender: "female",
        fatherName: "U Maung",
        address: "Hledan",
        major: "Computer Science",
        book: "React-js"
    };
    return NextResponse.json(book);
    
}