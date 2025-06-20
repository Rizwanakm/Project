import React from "react";
import DeletedUsers from "./components/DeletedUsers";

function App() {
  const dummyUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", reason: "" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", reason: "" },
  ];

  return <DeletedUsers deletedUsers={dummyUsers} />;
}

export default App;

