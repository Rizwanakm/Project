import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserStatusTable from "./components/UserStatusTable";
import UserDetails from "./components/UserDetails";
import users from "./data/users";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserStatusTable initialUsers={users} />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
