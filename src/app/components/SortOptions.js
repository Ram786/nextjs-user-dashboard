"use client";

export default function SortOptions({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border border-gray-300 rounded dark:bg-gray-700 dark:text-white"
    >
      <option value="name">Sort by Name</option>
      <option value="email">Sort by Email</option>
    </select>
  );
}
