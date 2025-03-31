"use client";
import Link from "next/link";
import { motion } from "framer-motion";
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
    <Link href={href} scroll={false} className={styles.link}>
      <motion.div
        layout
        className={`${styles.navItem} ${isActive ? styles.active : ""}`}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
      {/* {isActive && <motion.div layoutId="underline"></motion.div>} */}
    </Link>
  );
}
