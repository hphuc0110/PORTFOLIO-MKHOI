// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between p-5 bg-white">
      <div>
        <Link href={"/"}>
          {/* <Image src={""} alt="logo" width={40} height={40} /> */}
          logo
        </Link>
      </div>
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
