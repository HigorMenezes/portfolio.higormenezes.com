interface Skill {
  id: number;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  grade: number;
}

const mainSkills: Skill[] = [
  {
    id: 1,
    name: "Html5",
    image: {
      src: "/icons/tech/html5.svg",
      alt: "Html5 Logo",
    },
    grade: 5,
  },
  {
    id: 2,
    name: "Css3",
    image: {
      src: "/icons/tech/css3.svg",
      alt: "Css3 Logo",
    },
    grade: 5,
  },
  {
    id: 3,
    name: "Javascript",
    image: {
      src: "/icons/tech/javascript.svg",
      alt: "Javascript Logo",
    },
    grade: 5,
  },
  {
    id: 4,
    name: "ReactJS",
    image: {
      src: "/icons/tech/reactjs.svg",
      alt: "ReactJS Logo",
    },
    grade: 5,
  },
  {
    id: 5,
    name: "NodeJS",
    image: {
      src: "/icons/tech/nodejs.svg",
      alt: "NodeJS Logo",
    },
    grade: 5,
  },
  {
    id: 5,
    name: "GraphQL",
    image: {
      src: "/icons/tech/graphql.svg",
      alt: "GraphQL Logo",
    },
    grade: 5,
  },
];

export default mainSkills;
