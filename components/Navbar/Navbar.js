// components/Navbar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="flex justify-center p-5 bg-white">
      <ul className="flex items-center gap-6 font-semibold">
        <li
          className={`hover:text-blue-300 ${
            pathName == "/" ? "text-blue-500" : "text-black"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`hover:text-blue-300 ${
            pathName == "/coding-project" ? "text-blue-500" : "text-black"
          }`}
        >
          <Link href="/coding-project">Coding Projects</Link>
        </li>
        <li
          className={`hover:text-blue-300 ${
            pathName == "/start-up" ? "text-blue-500" : "text-black"
          }`}
        >
          <Link href="/start-up">My Start-up</Link>
        </li>
        <li
          className={`hover:text-blue-300 ${
            pathName == "/volunteer-project" ? "text-blue-500" : "text-black"
          }`}
        >
          <Link href="/volunteer-project">Volunteer Projetcs</Link>
        </li>
        <li
          className={`hover:text-blue-300 ${
            pathName == "/poems" ? "text-blue-500" : "text-black"
          }`}
        >
          <Link href="/poems">Poems</Link>
        </li>
        <li
          className={`hover:text-blue-300 ${
            pathName == "/culture-preservation" ? "text-blue-500" : "text-black"
          }`}
        >
          <Link href="/culture-preservation">Culture Preservation</Link>
        </li>
      </ul>
    </nav>
  );
}
