"use client";
import styles from "./heroSection.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  const transition = {
    duration: 1.5,

    repeat: 0,
  };
  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.heroSectionContent}>
        <h1 className={styles.heroSectionTitle}>
          <motion.div
            whileInView={{ y: [0, -50, 0], scaleX: [1, 1.1, 1] }}
            whileHover={{
              scaleX: 1.05,
              transition: { duration: 0.1 },
            }}
            transition={transition}
          >
            Lam Mai Tuyen
          </motion.div>
        </h1>
        <div className={styles.heroSectionSubtitle}>
          Prospective Business Analyst
        </div>
        <Link href="/about-me" className={styles.btn}>
          More About Me!
        </Link>
      </div>
      <div className={styles.profileImage}></div>
    </section>
  );
}
