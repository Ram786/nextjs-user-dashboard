"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <Link href="/">
        <p className="font-bold cursor-pointer text-lg text-black dark:text-white">
          User Directory
        </p>
      </Link>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
