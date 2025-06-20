import React, { useState } from "react";

const DeletedUsers = ({ deletedUsers }) => {
  const [search, setSearch] = useState("");

  // Filtered users based on search input
  const filteredUsers = deletedUsers.filter((user) =>
    `${user.name} ${user.email} ${user.reason}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#f0f4f8", minHeight: "100vh", padding: "20px" }}>
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2
            style={{
              marginBottom: "16px",
              color: "#2c3e50",
              fontSize: "24px",
            }}
          >
            🗑️ Deleted Users List
          </h2>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
              outline: "none",
            }}
          />
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#34495e", color: "#ffffff" }}>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Reason</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={user.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#ecf0f1" : "#ffffff",
                  }}
                >
                  <td style={tdStyle}>{user.name}</td>
                  <td style={tdStyle}>{user.email}</td>
                  <td style={tdStyle}>{user.reason}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ ...tdStyle, textAlign: "center", color: "#888" }}>
                  No users found matching search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: "14px",
  border: "1px solid #ddd",
  fontWeight: "600",
  fontSize: "16px",
};

const tdStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "center",
  fontSize: "15px",
};

export default DeletedUsers;
