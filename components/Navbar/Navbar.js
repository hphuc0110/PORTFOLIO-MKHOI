// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center p-5 bg-white">
      <ul className="flex items-center gap-6 font-semibold">
        <li className="hover:text-blue-500">
          <Link href="/coding-project">Coding Projects</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/start-up">My Start-up</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/volunteer-project">Volunteer Projetcs</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/poems">Poems</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/culture-preservation">Culture Preservation</Link>
        </li>
      </ul>
    </nav>
  );
}
