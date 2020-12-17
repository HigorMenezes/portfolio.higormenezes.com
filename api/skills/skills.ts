export type Category = "Languages" | "Frameworks" | "Libraries" | "Tools";
export type TechIcon =
  | "css3"
  | "gatsby"
  | "git"
  | "graphql"
  | "html5"
  | "javascript"
  | "nextjs"
  | "nodejs"
  | "reactjs"
  | "typescript";

export interface Skill {
  id: number;
  name: string;
  category: Category;
  techIcon: TechIcon;
  grade: number;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Html5",
    category: "Languages",
    techIcon: "html5",
    grade: 5,
  },
  {
    id: 2,
    name: "Css3",
    category: "Languages",
    techIcon: "css3",
    grade: 5,
  },
  {
    id: 3,
    name: "Javascript",
    category: "Languages",
    techIcon: "javascript",
    grade: 5,
  },
  {
    id: 4,
    name: "ReactJS",
    category: "Frameworks",
    techIcon: "reactjs",
    grade: 5,
  },
  {
    id: 5,
    name: "NodeJS",
    category: "Frameworks",
    techIcon: "nodejs",
    grade: 5,
  },
  {
    id: 5,
    name: "GraphQL",
    category: "Tools",
    techIcon: "graphql",
    grade: 5,
  },
  {
    id: 6,
    name: "Typescript",
    category: "Languages",
    techIcon: "typescript",
    grade: 4,
  },
  {
    id: 6,
    name: "Git",
    category: "Tools",
    techIcon: "git",
    grade: 5,
  },
  {
    id: 7,
    name: "NextJS",
    category: "Frameworks",
    techIcon: "nextjs",
    grade: 3.5,
  },
  {
    id: 8,
    name: "Gatsby",
    category: "Frameworks",
    techIcon: "gatsby",
    grade: 3.5,
  },
];

export default skills;
