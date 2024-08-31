import styles from "@/app/page.module.css";

const projects = [
  {
    name: "Testes Automatizados",
    link: "https://github.com/LuisFelipeMod/testes-automatizados",
    desc: "Neste repositório, criei testes E2E em Node.JS sem uso de nenhum framework para fins de estudos.",
  },
  {
    name: "Oscel",
    link: "https://github.com/LuisFelipeMod/projeto-integrador",
    desc: "Projeto em equipe, onde estamos criando uma plataforma para gestão de ordens de serviço. O projeto ainda não foi finalizado, portanto o código está na branch develop.",
  },
  {
    name: "Cat API",
    link: "https://github.com/LuisFelipeMod/Cat-API-Vue",
    desc: "Uma aplicação simples usando Vue.js que consome a Cat API (https://thecatapi.com/)",
  },
  {
    name: "Portfólio",
    link: "https://github.com/LuisFelipeMod/portfolio2",
    desc: "Repositório do meu portfólio.",
  },
];

export default function Projects() {
  return (
    <section className={styles.projectsSection} id="projects">
      <h1 className={styles.mainTitle}>Projetos</h1>
      <section>
        <ul className={styles.projectsList}>
          {projects.map((p) => (
            <li className={styles.projectsItem}>
              <a href={p.link}>{p.name}</a>
              <p>{p.desc}</p>
              <a href={p.link} className={styles.projectsButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                Github
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
