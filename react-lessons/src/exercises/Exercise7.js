"use client";

function Greeting({name}) {
    console.log(Greeting);
    
  return <h2>Hello, {name}!</h2>;
}

//Example7: Passing Props in React
export default function Parent() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}
