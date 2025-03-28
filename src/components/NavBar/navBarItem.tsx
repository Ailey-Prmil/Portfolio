"use client";
import Link from "next/link";
import styles from "./navBar.module.scss";
import { usePathname } from "next/navigation";

export default function NavBarItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  // Check if the current path matches the href
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
    >
      {children}
    </Link>
  );
}
