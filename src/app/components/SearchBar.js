"use client";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name..."
      className="w-full md:w-1/3 p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
    />
  );
}
