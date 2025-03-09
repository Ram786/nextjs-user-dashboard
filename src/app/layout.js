import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// Optional: Set default metadata
export const metadata = {
  title: "Next.js Users App",
  description: "Display and filter users from list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Wrap the entire app with UserProvider for global state */}
        <UserProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto p-4">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}
