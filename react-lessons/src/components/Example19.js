"use client";

// Example19: Short-circuiting with || (Fallback Rendering)
export default function Username({ name }){

  return (
    //If name is null or undefined , "Guest" will be displayed.
    <p> Hello, {name || "Guest"}!</p>
  );
}