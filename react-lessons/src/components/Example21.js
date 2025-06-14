"use client";

//Example21: Rendering a List of Objects
export default function UserList() {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];

  return (
    <ul>
      {users.map((user, index) => (
        <li key={user.id}>
          {user.name}-{user.age} years old
        </li>
      ))}
    </ul>
  );
}
