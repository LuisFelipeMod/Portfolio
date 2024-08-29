"use client";

import styles from "@/app/page.module.css";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ScrollMenuComing from "@/components/scrollMenuComing";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main className={styles.main}>
      <div className={styles.comingPage}>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        <motion.svg
          className={styles.bgWave}
          initial={{
            position: "absolute",
            top: "-5vh",
            transform: "rotate(180deg) skewY(0deg)",
          }}
          animate={{
            top: "-12vh",
            transform: "rotate(180deg) skewY(6deg)",
          }}
          transition={{
            duration: 2,
            delay: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#2d45e0"
            fill-opacity="1"
            d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,181.3C672,181,768,107,864,117.3C960,128,1056,224,1152,266.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </motion.svg>
        <section className={styles.comingPage_section}>
          <div className={styles.comingSection}>
            <motion.h1
              className={styles.welcomeTitle}
              initial={{
                top: "-20%",
                opacity: 0,
              }}
              animate={{
                top: "30%",
                opacity: 1,
              }}
              transition={{
                ease: "linear",
                duration: 0.4,
                opacity: { duration: 1.8 },
              }}
            >
              Bem vindo
            </motion.h1>

            <ScrollMenuComing />
            <motion.div
              className={styles.navByClick}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.5,
              }}
              transition={{
                ease: "linear",
                duration: 0.4,
                opacity: { delay: 0.4, duration: 1.8 },
              }}
            >
              <svg
                fill="#AEB8F4"
                width={20}
                height={20}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#AEB8F4"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>

              <span>Navegue por clique</span>
            </motion.div>
          </div>
          <section className={styles.aboutMe_section} id="aboutMe">
            <div className={styles.aboutMe_container}>
              <motion.div
                className={styles.aboutMe_box}
                initial={{
                  opacity: 0,
                  transform: "scale(0.5)",
                }}
                whileInView={{
                  opacity: 1,
                  transform: "scale(1)",
                }}
                exit={{
                  opacity: 0,
                  transform: "scale(0.8)",
                }}
                transition={{
                  ease: "linear",
                  duration: 0.7,
                  transform: { delay: 0.3, duration: 0.3 },
                }}
              >
                <figure className={styles.aboutMe_figure}>
                  <Image
                    className={styles.aboutMe_img}
                    width={1516}
                    height={1470}
                    src="/profile.jpeg"
                  ></Image>
                </figure>
                <div className={styles.aboutMe_card}>
                  <h1 className={styles.aboutMe_title}>Sobre mim</h1>
                  <h2 className={styles.aboutMe_myName}>
                    Luis Felipe Gonçalves Modesto
                  </h2>
                  <p className={styles.aboutMe_paragraph}>
                    Com quase 3 anos de experiência profissional, investi esse
                    tempo na criação de e-commerces.
                    Com quase 3 anos de experiência profissional, investi esse
                    tempo na criação de e-commerces.
                    Com quase 3 anos de experiência profissional, investi esse
                    tempo na criação de e-commerces.
                    Com quase 3 anos de experiência profissional, investi esse
                    tempo na criação de e-commerces.
                  </p>

                  <div className={styles.contactMe}>
                    <a href="mailto:luisgmodesto12@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aeb8f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                      <span>luisgmodesto12@gmail.com</span>
                    </a>
                    <a href="telto:+5514998084367">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aeb8f4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                      <span>(14) 998084367</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
