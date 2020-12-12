interface MainSkills {
  id: number;
  name: string;
  icon:
    | "Css3Icon"
    | "Html5Icon"
    | "JavascriptIcon"
    | "NodeJSIcon"
    | "ReactJSIcon";
  grade: number;
}

const mainSkills: MainSkills[] = [
  {
    id: 1,
    name: "Html5",
    icon: "Html5Icon",
    grade: 5,
  },
  {
    id: 2,
    name: "Css3",
    icon: "Css3Icon",
    grade: 5,
  },
  {
    id: 3,
    name: "Javascript",
    icon: "JavascriptIcon",
    grade: 5,
  },
  {
    id: 4,
    name: "ReactJS",
    icon: "ReactJSIcon",
    grade: 5,
  },
  {
    id: 5,
    name: "NodeJS",
    icon: "NodeJSIcon",
    grade: 5,
  },
];

export default mainSkills;
