"use client";

import styles from "@/app/page.module.css";
import { motion, useScroll } from "framer-motion";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import useMediaQuery from "@/components/useMediaQuery";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 991px)");
  const { scrollYProgress } = useScroll();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenuMobile = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className={styles.main}>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.svg
        className={styles.bgWave}
        initial={
          isMobile
            ? {
                position: "absolute",
                top: "0",
                transform: "rotate(180deg) skewY(0deg)",
              }
            : {
                position: "absolute",
                top: "-5vh",
                transform: "rotate(180deg) skewY(0deg)",
              }
        }
        animate={
          isMobile
            ? {
                position: "absolute",
                top: "-12vh",
                transform: "rotate(181deg) skewY(6deg)",
              }
            : {
                top: "-12vh",
                transform: "rotate(180deg) skewY(6deg)",
              }
        }
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
          fillOpacity="1"
          d="M0,128L48,112C96,96,192,64,288,85.3C384,107,480,181,576,181.3C672,181,768,107,864,117.3C960,128,1056,224,1152,266.7C1248,309,1344,299,1392,293.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </motion.svg>
      <div className={styles.comingSection}>
        <button className={styles.menuMobile} onClick={openMenuMobile}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <Navbar open={menuOpen} />
      </div>
      <section className={styles.aboutMe_section} id="aboutMe">
        <h1 className={styles.mainTitle}>Sobre mim</h1>
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
                alt="Sobre mim"
              ></Image>
            </figure>
            <div className={styles.aboutMe_card}>
              <h2 className={styles.aboutMe_myName}>
                Luis Felipe Gonçalves Modesto
              </h2>
              <p className={styles.aboutMe_paragraph}>
                Olá! Meu nome é Luis Felipe e sou desenvolvedor de software.{" "}
                <br />
                <br />
                Minha jornada na programação começou em 2019, e desde então,
                tenho me dedicado continuamente ao aprendizado e aprimoramento
                de minhas habilidades. Meu objetivo é absorver novos
                conhecimentos e acompanhar as melhores práticas do mercado.{" "}
                <br />
                <br />
                Em 2021, tive minha primeira oportunidade de trabalho, um marco
                fundamental para meu crescimento profissional. Essa experiência
                me ajudou a desenvolver uma visão corporativa, aprimorando minha
                comunicação, trabalho em equipe e proatividade. <br />
                <br />
                Sou formado em Análise e Desenvolvimento de Sistemas e atuo como
                desenvolvedor há 3 anos, sempre focado em entregar soluções
                eficientes e inovadoras. <br />
                <br />
                Caso tenha interesse em trabalhar comigo, meus contatos e redes
                sociais estão disponíveis abaixo. Será um prazer conversar!
              </p>
              <div className={styles.contactMe}>
                <a href="mailto:luisgmodesto12@gmail.com" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#aeb8f4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>luisgmodesto12@gmail.com</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5514998084367"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>

                  <span>(14) 998084367</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/luisfelipegm/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  Linkedin
                </a>
                <a href="https://github.com/LuisFelipeMod" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  Github
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Projects />

      <section className={styles.contacts_section} id="contacts">
        <h1 className={styles.mainTitle}>Contatos e links</h1>
        <div className={styles.contacts_container}>
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
            <div className={styles.contacts_card}>
              <p>
                Email:
                <a href="luisgmodesto12@gmail.com">luisgmodesto12@gmail.com</a>
              </p>

              <p>
                Whatsapp:
                <a href="https://api.whatsapp.com/send?phone=5514998084367">
                  +55 (14) 99808-4367
                </a>
              </p>

              <p>
                Linkedin:
                <a href="https://www.linkedin.com/in/luisfelipegm/">
                  https://www.linkedin.com/in/luisfelipegm/
                </a>
              </p>

              <p>
                Github:
                <a href="https://github.com/LuisFelipeMod">
                  https://github.com/LuisFelipeMod/
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
