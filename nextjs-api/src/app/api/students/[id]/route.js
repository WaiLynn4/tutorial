import { NextResponse } from "next/server";

export async function PUT (req, { params }) {
    const studentId = params.id; // get URI params field;
    const body = await req.json();
    return NextResponse.json({
        message: "Student is successfully updated.",
        studentId,
        bodyData: body,
    });
}

export async function DELETE(req, {params }) {
    const studentId = params.id;// get URI params field;
    return NextResponse.json({
        message: "Student is successfully deleted",
        studentId,
    });
    
}

export async function GET(req, {params }) {
    const studentId = params.id;// get URI params field;
    const student = {
        id: studentId,
        name: "Su Su",
        age: 18,
        gender: "female",
        fatherName: "U Maung",
        address: "Hledan",
        major: "Computer Science",
    };
    return NextResponse.json(student);
    
}