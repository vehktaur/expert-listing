"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<typeof Link> {
  classNames?: Partial<{
    default: string;
    active: string;
  }>;
}

const NavLink = ({ classNames, className, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return (
    <Link
      className={cn(
        classNames?.default,
        className,
        isActive && classNames?.active
      )}
      {...props}
    />
  );
};
export default NavLink;
