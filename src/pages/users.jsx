// import React from 'react'
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import {
  faSearch,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

function Users() {
  const { users, setUsers } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );


  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="px-4 mt-4">
      <div className="card p-4 shadow-sm">
        {/* Row 1: Header + Button */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
          <div>
            <h4>Users</h4>
            <p className="text-muted mb-0">
              Manage registered library members.
            </p>
          </div>

          <Link
            to="/adduser"
            className="btn d-flex align-items-center gap-2"
            style={{ backgroundColor: "#1B2A6B", color: "white" }}
          >
            <FontAwesomeIcon icon={faUserPlus} /> Add User
          </Link>
        </div>

        {/* Row 2: Search bar */}
        <div className="input-group" style={{ width: "300px", maxWidth: "100%" }}>
          <span className="input-group-text bg-white border-end-0">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search by name or email..."
            style={{ backgroundColor: "#f8f9fa" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="card p-3 shadow-sm mt-3">
          <div className="table-responsive">
<table className="table table-borderless">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Books Issued</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.booksIssued}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "red", cursor: "pointer" }}
                      onClick={() => handleDelete(user.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
        </div>
      </div>
    </div>
  );
}

export default Users;
