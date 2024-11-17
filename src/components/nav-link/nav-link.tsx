"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

type NavLinkProps = Omit<LinkProps, "link"> & {
  children: ReactNode;
  activeClassName?: string;
  className?: string;
};

const NavLink: FC<NavLinkProps> = ({
  children,
  href,
  activeClassName,
  className,
  ...props
}) => {
  const pathname = usePathname();

  const hrefString = (typeof href === "string" ? href : href.pathname) || "";

  const isActive =
    pathname.endsWith(hrefString) ||
    (hrefString.includes(pathname) && pathname !== "/");
  const newClassName = `${isActive ? activeClassName : ""} ${className || ""}`;

  return (
    <Link href={href} className={newClassName} {...props}>
      {children}
    </Link>
  );
};
export default NavLink;
