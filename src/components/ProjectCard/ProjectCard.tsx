import Image from "next/image";

import { Project } from "../../../api/projects/projects";

import styles from "./styles.module.scss";

import TechIcon from "../TechIcon";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const thumbImage = project.projectImages[0];

  return (
    <section className={styles.root}>
      <h3 className={styles.title}>{project.title}</h3>
      <div className={styles.projectImage}>
        <Image
          title={thumbImage.title}
          src={thumbImage.src}
          alt={thumbImage.alt}
          width={thumbImage.width}
          height={thumbImage.height}
          layout="responsive"
        />
      </div>
      <p className={styles.description}>A front-end project to edit text.</p>
      <div className={styles.techs}>
        {project.techIcons.map((techIcon) => (
          <TechIcon key={techIcon} title={techIcon} icon={techIcon} size={40} />
        ))}
      </div>
    </section>
  );
}

export default ProjectCard;
