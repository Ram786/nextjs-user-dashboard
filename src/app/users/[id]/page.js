import Link from "next/link";

// This is an SSG approach. We'll generate pages for each user. Assuming data don't changes too frequently
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users for paths");
  const users = await res.json();

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

async function getUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  return res.json();
}

export default async function UserDetailPage({ params }) {
  const user = await getUser(params.id);

  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="mt-4">
      <Link
        href="/"
        className="inline-block mb-4 text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Users
      </Link>
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <p>
        <strong>Company:</strong> {user.company?.name}
      </p>
      <p>
        <strong>City:</strong> {user.address?.city}
      </p>
    </div>
  );
}
