"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
export default function CTABtn({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const buttonText = {
    cert: { description: "See my Certifications 👀", link: "/about-me" },
    project: { description: "View Projects 🔍", link: "/projects" },
    resume: { description: "Download Resume 📄", link: "/resume" },
  };

  const handleHoverStart = async () => {
    setIsHovered(true);
    await controls.start({
      scale: 1.02,
      transition: { type: "spring", stiffness: 300 },
    });
  };

  const handleHoverEnd = async () => {
    setIsHovered(false);
    await controls.start({
      scale: 1,
      transition: { type: "spring", stiffness: 300 },
    });
  };

  return (
    <motion.div
      className={`${role}-cta-container`}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.div
        className="content-wrapper"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="button-text"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={buttonText[role as keyof typeof buttonText].link}>
          {buttonText[role as keyof typeof buttonText].description}
        </Link>
      </motion.div>
    </motion.div>
  );
}
