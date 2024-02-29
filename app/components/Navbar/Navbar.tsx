"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

import { navbarLabels } from "./variables";

export const Navbar = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-10 mb-5 px-5 h-14 items-center shadow-md">
      <Link href="/">
        <AiFillBug size={32} />
      </Link>
      <ul className="flex space-x-6">
        {navbarLabels.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-zinc-500 hover:text-zinc-800 transition-colors py-3": true,
              "text-zinc-800 border-b-2 border-zinc-800":
                link.href === currentPath,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
