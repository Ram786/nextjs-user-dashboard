"use client";

import { useEffect, useState, useMemo } from "react";
import { useUserContext } from "./context/UserContext";
import SearchBar from "./components/SearchBar";
import SortOptions from "./components/SortOptions";
import UserList from "./components/UserList";

export default function UsersClient({ initialUsers }) {
  const { users, setUsers } = useUserContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("name");

  // On first render, store the initial users in context
  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  // Filter & sort the users from context
  const filteredUsers = useMemo(() => {
    if (!users) return [];

    // Filter by search term
    let result = users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort by chosen key
    result.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });

    return result;
  }, [users, searchTerm, sortKey]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <SortOptions value={sortKey} onChange={setSortKey} />
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
}
