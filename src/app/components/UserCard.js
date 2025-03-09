"use client";

import Link from "next/link";

export default function UserCard({ user }) {
  return (
    <div className="p-4 border border-gray-300 rounded shadow hover:shadow-lg dark:bg-gray-800">
      <h2 className="font-bold text-lg mb-2">{user.name}</h2>
      <p className="mb-1">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="mb-1">
        <strong>City:</strong> {user.address.city}
      </p>
      <Link
        href={`/users/${user.id}`}
        className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
}
