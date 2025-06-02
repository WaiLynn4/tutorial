"use client";

import React, {useState} from "react";

//Example: State in Functional Component
export default function Person() {
  const [name, setName] = useState("Mg Kyaw Min");
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1>State in Functional Component</h1>
      <div>{name}</div>
      <div>{date.toString()}</div>
    </div>
  );
}
