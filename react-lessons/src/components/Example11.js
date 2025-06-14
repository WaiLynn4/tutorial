"use client";

import { useState } from "react";

function Card(props) {
  return <div>{props.children}</div>;
}

function Heading({ text }) {
  console.log("Heading Render");
  return <div>{text}</div>;
}

//Example11: Passing a children as a Prop
function Parent() {
  const [HeadingText, setHeadingText] = useState("");
  return (
    <div>
      <div>
        <Card>
          <input
            value={HeadingText}
            onChange={(e) => setHeadingText(e.target.value)}
          />
          <Heading text={HeadingText} />
          <h2>Welcome!</h2>
          <p>This is inside the card.</p>
        </Card>

        <Card>
          <h3>User Profile</h3>
          <ul>
            <li>Name: Alice</li>
            <li>Age: 25</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default Parent;
