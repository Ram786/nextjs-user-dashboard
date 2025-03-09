import UsersClient from "./users-client";

export const revalidate = 3600; // Revalidate data every hour (SSG with revalidation)

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export default async function HomePage() {
  const users = await getUsers();

  return (
    <div>
      <UsersClient initialUsers={users} />
    </div>
  );
}
