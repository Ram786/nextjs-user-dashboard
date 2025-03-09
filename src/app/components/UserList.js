"use client";

import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  if (!users || users.length === 0) {
    return <p className="mt-4">No users found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Use React.memo to avoid unnecessary re-renders
export default React.memo(UserList);
