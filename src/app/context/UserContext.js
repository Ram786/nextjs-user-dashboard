"use client"; // Required for context in the App Router

import { createContext, useContext, useState, useMemo } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  // store all fetched users here
  const [users, setUsers] = useState([]);

  const value = useMemo(() => ({ users, setUsers }), [users]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}
