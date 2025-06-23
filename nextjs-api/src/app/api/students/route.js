import { NextResponse } from "next/server";
import * as yup from "yup";

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

//Studet List API
export async function GET() {
  return NextResponse.json(StudentData);
}

//Validation schema to validate client requests.
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  fatherName: yup.string().required("Father Name is required"),
  address: yup.string().required("Address is required"),
  age: yup.number().required("Age is required"),
  major: yup.string().required("Major is required"),
});

export async function POST(req) {
  try {
    const body = await req.json(); //Get requested body data from client
    await schema.validate(body, { abortEarly: false });
    return NextResponse.json({
      message: "Student is successfully created.",
      bodyData: body,
    });
  } catch (error) {
    // return NextResponse.json(
    // //   { message: "Internal Server Error" },
    // //   {
    // //     status: 500,
    // //   }
    // // );

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
