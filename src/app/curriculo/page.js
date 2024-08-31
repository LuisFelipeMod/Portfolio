"use client";

import Head from "next/head";
import Link from "next/link";
import ScrollBehavior from "@/components/scrollBehavior";
import SocialMedias from "@/components/socialMedias";
import styles from "@/app/curriculo/page.module.css";
import { motion } from "framer-motion";
const siteTitle = "Meu currículo";

export default function Curriculo({ children, home }) {
  return (
    <div className="main">
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      <div className="container">
        <div className={styles.section_info}>
          <motion.h1
            className={styles.name}
            initial={{
              transform: "scale3d(1, 0, 1)",
              opacity: 0,
            }}
            animate={{
              transform: "scale3d(1, 1, 1)",
              opacity: 1,
            }}
            transition={{
              ease: "linear",
              delay: 0.3,
              duration: 0.2,
            }}
          >
            Luis Felipe<br></br>Gonçalves Modesto
          </motion.h1>

          <motion.h2
            className={styles.occupation}
            initial={{
              transform: "scale3d(1, 0, 1)",
              opacity: 0,
            }}
            animate={{
              transform: "scale3d(1, 1, 1)",
              opacity: 1,
            }}
            transition={{
              ease: "linear",
              delay: 0.6,
              duration: 0.2,
            }}
          >
            Desenvolvedor
          </motion.h2>
          <ScrollBehavior />
          <SocialMedias />
          <motion.div
            className={styles.contactMe}
            initial={{
              transform: "scale3d(1, 0, 1)",
              opacity: 0,
            }}
            animate={{
              transform: "scale3d(1, 1, 1)",
              opacity: 1,
            }}
            transition={{
              ease: "linear",
              delay: 2.1,
              duration: 0.2,
            }}
          >
            <a href="mailto:luisgmodesto12@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#010626"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
              <span>luisgmodesto12@gmail.com</span>
            </a>
            <a href="telto:+5514998084367">
              <svg
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#010626"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <span>(14) 998084367</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className={styles.section}
          initial={{
            "max-height": "0",
            overflow: "hidden",
          }}
          animate={{
            "max-height": "193rem",
            overflow: "hidden",
          }}
          transition={{
            ease: "linear",
            delay: 2,
            duration: 3,
          }}
        >
          <div className={styles.section_about}>
            <span className={styles.about} id="about">
              Com quase 3 anos de experiência profissional, investi esse tempo
              na criação de e-commerces. Fui precursor e liderei o
              desenvolvimento web de projetos, evoluindo muito ao longo desse
              período. Trabalhei com tecnologias como Typescript, Next.Js,
              React, Vue.js, JavaScript, Docker, GraphQL, HTML, CSS, SASS, e
              Git, entre outras.
            </span>
          </div>

          <h3 className={styles.title_experience} id="profissional">
            Profissional:
          </h3>
          <hr className={styles.divisor}></hr>
          <div
            className={`${styles.box_experience} ${styles.box_auto} ${styles.box_mgTop}`}
          >
            <span className={styles.year_experience}>Jan 2022 - Presente</span>
            <div className={styles.info_experience}>
              <Link
                href="https://eficazmarketing.com/"
                className={styles.profission_experience}
              >
                Desenvolvedor - Eficaz Marketing
                <span className={styles.arrow_up}>⮭</span>
              </Link>
              <span className={styles.desc_experience}>
                <strong>
                  Liderei o primeiro grande projeto da empresa utilizando
                  Shopify:
                </strong>
                <br />
                - Iniciei os primeiros estudos da plataforma e, posteriormente,
                liderando parte da equipe de desenvolvimento, implementei um
                tema customizado utilizando a Custom Storefront API. Adotei o
                gitflow para otimizar o fluxo de trabalho e garantir a qualidade
                do código. Fui responsável por escolher as tecnologias mais
                adequadas para o projeto, criar a estrutura do código e garantir
                a aplicação de boas práticas de programação. Além disso, conduzi
                as revisões de código, assegurando a qualidade e a consistência
                do desenvolvimento. Documentei todos os processos para facilitar
                a manutenção e o onboarding de novos membros da equipe.
                Ministrei diversas reuniões, apresentando dados e insights sobre
                a plataforma Shopify para auxiliar na construção de novos
                projetos. Graças à minha liderança e expertise técnica,
                conseguimos entregar o projeto dentro do prazo e com resultados
                superiores às expectativas. <br />
                <br />
                <strong>Atuei como mentor de novos membros do time:</strong>
                <br />
                - Fiquei responsável por os instruir referente os padrões e
                processos da equipe. Ministrei treinamentos e reuniões, com a
                finalidade de promover conhecimento técnico. Fiz Code-Review
                para acompanhá-los e instruí-los.
                <br />
                <br />
                <strong>
                  Impulsionei a cultura de documentação na empresa:
                </strong>{" "}
                <br />- Identificando a necessidade de otimizar nossos
                processos, tomei a iniciativa de documentar detalhadamente as
                atividades de práticas de programação, processos de garantia de
                qualidade, funcionamento dos meus projetos, implementação de
                tráfego pago e processos das plataformas e-commerce. Essa ação
                resultou em uma redução muito significativa no tempo de
                treinamento de novos colaboradores e um considerável aumento na
                eficiência da equipe, além de garantir que todos os membros da
                equipe estivessem alinhados e trabalhando com as mesmas
                informações.
              </span>
            </div>
          </div>
          <h3 className={styles.title_experience} id="education">
            Formação:
          </h3>
          <hr className={styles.divisor}></hr>
          <div
            className={`${styles.box_experience} ${styles.box_auto} ${styles.box_mgTop}`}
          >
            <span className={styles.year_experience}>
              2022 - 2024 (em curso)
            </span>
            <div className={styles.info_experience}>
              <Link
                href="https://eficazmarketing.com/"
                className={styles.profission_experience}
              >
                Análise e Desenvolvimento de Sistemas
              </Link>
              <span className={styles.desc_experience}></span>
            </div>
          </div>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <span className={styles.year_experience}>2019 - 2021</span>
            <div className={styles.info_experience}>
              <Link
                href="https://www.cps.sp.gov.br/etec/"
                className={styles.profission_experience}
              >
                Ensino Técnico de Desenvolvimento de Sistemas Integrado ao
                Ensino Médio - Etec Antonio Devisate
              </Link>
            </div>
          </div>
          <h3 className={styles.title_experience} id="language">
            Idioma:
          </h3>
          <hr className={styles.divisor}></hr>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                Inglês Intermediário
              </Link>
            </div>
          </div>
          <h3 className={styles.title_experience} id="knowledge">
            Conhecimentos:
          </h3>
          <hr className={styles.divisor}></hr>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                React; NextJS; JavaScript; PHP; GraphQL; REST; jQuery; Twig;
                Git;<br></br>
                <br></br>HTML; CSS; SASS; Stylus; Figma; <br></br>
                <br></br>Github; Google Analytics; Google Tag Manager; Google
                Merchant Center; Google Ads; <br />
                <br /> Plataformas de e-commerces: WAKE; Tray; Vtex; Shopify;
                Wordpress; Loja Integrada{" "}
              </Link>
            </div>
          </div>
          <h3 className={styles.title_experience} id="school">
            Vivência Escolar:
          </h3>
          <hr className={styles.divisor}></hr>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                Monitor de Língua Portuguesa – Etec Antonio Devisate – 2019;
              </Link>
            </div>
          </div>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                Visita Técnica: Casa Sol – Etec Antonio Devisate – 2019;
              </Link>
            </div>
          </div>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                Representante de Turma – E.E. Maria Izabel Sampaio Vidal – 2017;
              </Link>
            </div>
          </div>
          <h3 className={styles.title_experience} id="volunteer">
            Trabalhos Voluntários:
          </h3>
          <hr className={styles.divisor}></hr>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                Recicla Etec (Etec Antonio Devisate) – 2019
              </Link>
            </div>
          </div>
          <h3 className={styles.title_experience} id="speeches">
            Palestras e Cursos Complementares:
          </h3>
          <hr className={styles.divisor}></hr>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                Unimar Tech Summit: Minicurso NextJS - 2023 - Universidade de
                Marília - Unimar;
              </Link>
              <Link href="#" className={styles.profission_experience}>
                Unimar Tech Summit: “Machine Learning: Da Teoria à Prática” –
                2023 – Universidade de Marília – Unimar;
              </Link>
              <Link href="#/" className={styles.profission_experience}>
                Unimar Tech Summit: "Mercado de tecnologia" - 2023 -
                Universidade de Marília - Unimar
              </Link>
            </div>
          </div>
          <h3 className={styles.title_experience} id="speeches">
            Referências:
          </h3>
          <hr className={styles.divisor}></hr>
          <div className={`${styles.box_experience} ${styles.box_auto}`}>
            <div className={styles.info_experience}>
              <Link href="#" className={styles.profission_experience}>
                Dra. Sra. Marina João Bernardes de Oliveira – Professora – Etec
                Antonio Devisate - (14)3444-5467.
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
