"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app/page.module.css";
import { Scale } from "lucide-react";

export default function Navbar() {
  const scrollToAboutMe = () => {
    const aboutSection = document.getElementById("aboutMe");

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.navbar
      className={styles.nav}
      initial={{
        top: "120%",
        opacity: 0,
      }}
      animate={{
        top: "2rem",
        opacity: 1,
      }}
      transition={{
        ease: "linear",
        duration: 0.4,
        opacity: { duration: 1.8 },
      }}
    >
      <ul className={styles.navList}>
        <motion.li
          className={styles.navItem}
          whileHover={{
            background: "#2d45e0",
          }}
          whileTap={{
            scale: "0.9",
            transition: { ease: "easeOut", duration: 10 },
          }}
          onClick={scrollToAboutMe}
        >
          Sobre mim
        </motion.li>

        <motion.li
          className={styles.navItem}
          whileHover={{
            background: "#2d45e0",
          }}
          whileTap={{
            scale: "0.9",
            transition: { ease: "easeOut", duration: 10 },
          }}
          onClick={scrollToProjects}
        >
          Projetos
        </motion.li>
        <motion.li
          className={styles.navItem}
          whileHover={{
            background: "#2d45e0",
          }}
          whileTap={{
            scale: "0.9",
            transition: { ease: "easeOut", duration: 10 },
          }}
        >
          <motion.a className={styles.navItem} href="curriculo">
            Currículo
          </motion.a>
        </motion.li>
      </ul>
    </motion.navbar>
  );
}
