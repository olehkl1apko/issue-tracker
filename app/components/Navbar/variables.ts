interface INavbarLinks {
  label: string;
  href: string;
}

export const links: INavbarLinks[] = [
  { label: "Dashboard", href: "/" },
  { label: "Issues", href: "/issues/list" },
];
