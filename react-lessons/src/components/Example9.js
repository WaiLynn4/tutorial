"use client";

function Greeting({ name = "Guest", age = "unknown" }) {
  return (
    <h2>
      Hello, {name}! You are {age} years old.
    </h2>
  );
}

//Example9: Default Props
function Parent() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting /> {/* Will use default props */}
    </div>
  );
}

export default Parent;
