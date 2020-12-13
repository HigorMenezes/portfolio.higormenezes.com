export type Category = "Languages" | "Frameworks" | "Libraries" | "Tools";

export interface Skill {
  id: number;
  name: string;
  category: Category;
  image: {
    src: string;
    alt: string;
  };
  grade: number;
}

const skills: Skill[] = [
  {
    id: 1,
    name: "Html5",
    category: "Languages",
    image: {
      src: "/icons/tech/html5.svg",
      alt: "Html5 Logo",
    },
    grade: 5,
  },
  {
    id: 2,
    name: "Css3",
    category: "Languages",
    image: {
      src: "/icons/tech/css3.svg",
      alt: "Css3 Logo",
    },
    grade: 5,
  },
  {
    id: 3,
    name: "Javascript",
    category: "Languages",
    image: {
      src: "/icons/tech/javascript.svg",
      alt: "Javascript Logo",
    },
    grade: 5,
  },
  {
    id: 4,
    name: "ReactJS",
    category: "Frameworks",
    image: {
      src: "/icons/tech/reactjs.svg",
      alt: "ReactJS Logo",
    },
    grade: 5,
  },
  {
    id: 5,
    name: "NodeJS",
    category: "Frameworks",
    image: {
      src: "/icons/tech/nodejs.svg",
      alt: "NodeJS Logo",
    },
    grade: 5,
  },
  {
    id: 5,
    name: "GraphQL",
    category: "Languages",
    image: {
      src: "/icons/tech/graphql.svg",
      alt: "GraphQL Logo",
    },
    grade: 5,
  },
  {
    id: 6,
    name: "Typescript",
    category: "Languages",
    image: {
      src: "/icons/tech/typescript.svg",
      alt: "Typescript Logo",
    },
    grade: 4,
  },
  {
    id: 6,
    name: "Git",
    category: "Tools",
    image: {
      src: "/icons/tech/git.svg",
      alt: "Git Logo",
    },
    grade: 5,
  },
  {
    id: 7,
    name: "NextJS",
    category: "Frameworks",
    image: {
      src: "/icons/tech/nextjs.svg",
      alt: "NextJS Logo",
    },
    grade: 3.5,
  },
  {
    id: 8,
    name: "Gatsby",
    category: "Frameworks",
    image: {
      src: "/icons/tech/gatsby.svg",
      alt: "Gatsby Logo",
    },
    grade: 3.5,
  },
];

export default skills;
