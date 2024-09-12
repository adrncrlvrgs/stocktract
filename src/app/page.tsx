'use client'

import Image from "next/image";
import { useData } from "@/_context/context";
import { getAllUsers, deleteUser } from "@/_actions/users.actions";
import { useState, useEffect } from "react";

export default function Home() {
  const [state, dispatch] = useData(); 

  useEffect(() => {
    getAllUsers()(dispatch);
  }, [dispatch]);

  const handleDelete = (userId: any) => {
    deleteUser(userId)(dispatch)
  };

  if (state.getAllUsers.loading) {
    return <div>Loading users...</div>;
  }

  if (state.getAllUsers.error) {
    return <div>Error: {state.getAllUsers.error}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {state?.getAllUsers?.users.map((user: any) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>
              <button color="red" onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}
