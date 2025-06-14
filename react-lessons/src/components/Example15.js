"use client";

//Example15: Using the Ternary Operator (? :) in Rendering
export default function Greeting ({isLoggedIn}) {
    return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please log in</h1>;
}