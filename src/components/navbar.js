"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "@/app/page.module.css";

export default function Navbar(props) {

  const openInMobile = props.open; 
  
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


  const scrollToContacts = () => {
    const projectsSection = document.getElementById("contacts");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.navbar
      className={openInMobile ? `${styles.nav} ${styles.open}`: styles.nav }
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
          onClick={scrollToContacts}
        >
          Contatos
        </motion.li>
      </ul>
    </motion.navbar>
  );
}
