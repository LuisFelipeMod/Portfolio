"use client"

import styles from "@/app/page.module.css";
import EmblaCarousel from "@/components/carousel"
import projects from "@/data/projects"

const OPTIONS = { loop: true }

export default function Projects() {

  return (
    <section className={styles.projectsSection} id="projects">
      <h1 className={styles.mainTitle}>Projetos</h1>
      <section>
        <EmblaCarousel slides={projects} options={OPTIONS} />
      </section>
    </section>
  );
}
