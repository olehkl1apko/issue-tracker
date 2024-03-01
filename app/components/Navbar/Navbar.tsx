import Link from "next/link";
import { Container, Flex } from "@radix-ui/themes";

import { AiFillBug } from "react-icons/ai";
import { NavLinks } from "./NavLinks";
import { AuthStatus } from "./AuthStatus";

export const Navbar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </Container>
    </nav>
  );
};
