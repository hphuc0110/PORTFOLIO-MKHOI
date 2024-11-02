// components/Navbar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ color = "light" }) {
  const pathName = usePathname();
  const isDark = color === "dark";
  const list = [
    { name: "Home", path: "/" },
    { name: "Coding Projects", path: "/coding-project" },
    { name: "My Start-up", path: "/start-up" },
    { name: "Volunteer Projects", path: "/volunteer-project" },
    { name: "Photography & Filming", path: "/photography" },
    { name: "Culture Preservation", path: "/culture-preservation" },
  ];

  return (
    <nav
      className={`flex justify-center p-5`}
      style={{ backgroundColor: isDark ? "#212121" : "#fff" }}
    >
      <ul className="flex items-center gap-6 font-semibold">
        {list.map((item, idx) => (
          <li
            key={idx}
            className={`hover:text-blue-600 ${
              pathName == item.path
                ? "text-blue-500"
                : !isDark
                ? "text-black"
                : "text-white"
            }`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
