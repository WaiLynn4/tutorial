"use client";

// Example20: Rendering a Simple List
export default function SimpleList() {
  const fruits = ["Apple", "Banana", "orange"];

  return (
    // <ul>
    //     {fruits.map((fruit, index) => (
    //         <li key={index}>{fruit}</li>
    //     ))}
    // </ul>

    <ul>
      {fruits.map((fruit, index) => {
        return <li key={index}>{fruit}</li>;
      })}
    </ul>
  );
}
