'use client'

import Image from "next/image";
import { useData } from "@/_context/context";
import { getAllUsers } from "@/_actions/users.actions";
import { useState, useEffect } from "react";

export default function Home() {
  const [state, dispatch] = useData(); 

  useEffect(() => {
    getAllUsers()(dispatch);
  }, [dispatch]);

  // Show loading state
  if (state.userReducer.loading) {
    return <div>Loading users...</div>;
  }

  if (state.userReducer.error) {
    return <div>Error: {state.userReducer.error}</div>;
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
        {state.userReducer.users.map((user: any) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

}
