import { TechIcon } from "../skills/skills";

export interface ProjectImage {
  id: number;
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techIcons: TechIcon[];
  projectImages: ProjectImage[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rich Text Editor",
    description: "A front-end project to edit text.",
    techIcons: ["html5", "css3", "javascript", "reactjs"],
    projectImages: [
      {
        id: 1,
        title: "Rich Text Editor",
        src: "/projects/rich-text-editor/1.png",
        alt: "Rich Text Editor Interface",
        width: 1920,
        height: 1080,
      },
    ],
  },
];

export default projects;
