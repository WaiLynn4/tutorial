"use client";

//Example16: Using the Logical Operator (&&) in Rendering
export default function Notification ({ hasMessage}) {
    return (
        <div>
            <h1>Dashboard</h1>
            {hasMessage && <p> You have new Message</p>}
        </div>
    );
}