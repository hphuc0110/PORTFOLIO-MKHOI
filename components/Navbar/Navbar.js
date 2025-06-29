// components/Navbar.js
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import hamburger from "@/public/icon/hamburger.svg";
import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Navbar({ color = "light" }) {
  const pathName = usePathname();
  console.log(pathName);
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
      className={`flex justify-between items-center p-5 xl:px-24`}
      style={{ backgroundColor: isDark ? "transparent" : "#fff" }}
    >
      <p className="text-2xl font-semibold text-blue-500">GIA KHANG</p>

      <div className="lg:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Image src={hamburger} width={32} height={32} alt="hamburger" />
          </DialogTrigger>
          <DialogContent className="max-w-[300px] py-[64px] text-white flex flex-col justify-center bg-transparent backdrop-blur-sm border-white border text-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
            {list.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className={`hover:text-blue-600 ${
                  pathName == item.path ? "text-blue-500" : "text-white"
                }`}
                id={idx}
              >
                {item.name}
              </Link>
            ))}
          </DialogContent>
        </Dialog>
      </div>

      <ul className="lg:flex items-center gap-6 font-semibold hidden">
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
