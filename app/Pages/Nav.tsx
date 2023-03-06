"use client";

import URL from "@/utils/URL";
import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="flex space-x-4">
        {Object.entries(URL).map(([key, { title, url }]) => (
          <h2
            className="Last:pr-24 cursor-pointer transition duration-100
             transform hover:scale-125 hover:text-white active:text-red-500"
          >
            <Link href={`${key}`}>{title}</Link>
          </h2>
        ))}
      </div>
    </nav>
  );
}
