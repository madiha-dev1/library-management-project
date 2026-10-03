// import React from 'react'
import { useState } from "react";
import 'react-notifications-component/dist/theme.css';
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import {  faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Store } from "react-notifications-component";

 function AddUser() {
  const { users, setUsers } = useContext(UserContext);
  const [fullName, setfullName] = useState("");
  const [emailAddress, setEmailAddress]= useState("");
  const [role, setRole]=useState("");

  const handleAddUser=()=>{
    if(fullName==="" || emailAddress==="" || role===""){
       Store.addNotification({
      title: "Error",
      message: "Please fill all fields!",
      type: "danger",
      insert: "top",
      container: "top-right",
      dismiss: { duration: 3000 },
    })
    }else{
      const newUser = {
      id: users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      name: fullName,
      email: emailAddress,
      role: role,
      booksIssued: 0,
    };

    setUsers([...users, newUser]);

    Store.addNotification({
      title: "Success",
      message: "User Added Successfully!",
      type: "success",
      insert: "top",
      container: "top-right",
      dismiss: { duration: 3000 },
    });

    setfullName("");
    setEmailAddress("");
    setRole("");
  }
    }
  


  return (
    <div className="px-4 mt-4 card p-4 shadow-sm mx-3">
      <h4 style={{ color: "#1a1a2e", fontWeight: "bold" }}>Add User</h4>
      <p className="text-muted">Register a new member to the library.</p>


      <div className="card p-4 shadow-sm">
        
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Full Name</label>
            <input type="text" className="form-control"  placeholder="e.g. hina fatima" value={fullName} onChange={(e) => setfullName(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label>Email Address</label>
            <input type="text" className="form-control" placeholder="e.g. hinafatima@example.com" value={emailAddress} onChange={(e)=>setEmailAddress(e.target.value)} />
          </div>
        </div>

      </div>


      <div className="row mb-3">
  <div className="col-md-6">
    <label>Role</label>
    <select className="form-select" value={role} onChange={(e)=>setRole(e.target.value)}>
      <option value="">Select role</option>
      <option value="Member">Member</option>
      <option value="Admin">Admin</option>
    </select>
  </div>
</div>

 <button 
  className="btn d-flex align-items-center gap-2 mt-3 ms-3" 
  style={{ backgroundColor: "#1B2A6B", color: "white", width: "fit-content" }}
  onClick={handleAddUser}>
  <FontAwesomeIcon icon={faUserPlus} /> Add User
</button>
    </div>
  )
}


export default AddUser;