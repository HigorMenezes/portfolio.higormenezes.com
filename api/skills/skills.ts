export type Category = "Languages" | "Frameworks" | "Libraries" | "Tools";
export type Icon =
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
  icon: Icon;
  grade: number;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Html5",
    category: "Languages",
    icon: "html5",
    grade: 5,
  },
  {
    id: 2,
    name: "Css3",
    category: "Languages",
    icon: "css3",
    grade: 5,
  },
  {
    id: 3,
    name: "Javascript",
    category: "Languages",
    icon: "javascript",
    grade: 5,
  },
  {
    id: 4,
    name: "ReactJS",
    category: "Frameworks",
    icon: "reactjs",
    grade: 5,
  },
  {
    id: 5,
    name: "NodeJS",
    category: "Frameworks",
    icon: "nodejs",
    grade: 5,
  },
  {
    id: 5,
    name: "GraphQL",
    category: "Tools",
    icon: "graphql",
    grade: 5,
  },
  {
    id: 6,
    name: "Typescript",
    category: "Languages",
    icon: "typescript",
    grade: 4,
  },
  {
    id: 6,
    name: "Git",
    category: "Tools",
    icon: "git",
    grade: 5,
  },
  {
    id: 7,
    name: "NextJS",
    category: "Frameworks",
    icon: "nextjs",
    grade: 3.5,
  },
  {
    id: 8,
    name: "Gatsby",
    category: "Frameworks",
    icon: "gatsby",
    grade: 3.5,
  },
];

export default skills;
