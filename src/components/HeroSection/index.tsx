import styles from "./heroSection.module.scss";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.heroSectionContent}>
        <h1 className={styles.heroSectionTitle}>Lam Mai Tuyen</h1>
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
