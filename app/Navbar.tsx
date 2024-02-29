import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import { navbarLabels } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex space-x-10 border mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug size={32} />
      </Link>
      <ul className="flex space-x-6">
        {navbarLabels.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className=" text-zinc-500 hover:text-zinc-900 transition-colors py-5"
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
