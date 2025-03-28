import styles from "./navBar.module.scss";
import NavBarItem from "./navBarItem";

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarLogo}>My Portfolio</div>
      <div className={styles.navBarItems}>
        <NavBarItem href="/">Home</NavBarItem>
        <NavBarItem href="/about-me">About Me</NavBarItem>
        <NavBarItem href="/projects">Projects</NavBarItem>
        <NavBarItem href="/resume">Resume</NavBarItem>
      </div>
    </nav>
  );
}
