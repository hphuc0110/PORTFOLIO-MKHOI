"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import hamburger from "@/public/icon/hamburger.svg";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

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

  const handleHomeClick = () => {
    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  

  return (
    <>
      <nav
        className={`flex justify-between items-center p-5 xl:px-24`}
        style={{ backgroundColor: isDark ? "transparent" : "#fff" }}
      >
        <p className="text-2xl font-semibold text-blue-500">MINH KHÔI</p>

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
                    pathName === item.path ? "text-blue-500" : "text-white"
                  }`}
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
                pathName === item.path
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

      {/* ✅ Nút Home cuộn lên đầu trang hiện tại */}
      <button
        onClick={handleHomeClick}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        aria-label="Go to Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 12l2-2m0 0l7-7 7 7m-9 2v6m4-6v6m5 0h-4a2 2 0 01-2-2v-4H9v4a2 2 0 01-2 2H3"
          />
        </svg>
      </button>
    </>
  );
}
