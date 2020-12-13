import skills, { Category, Skill } from "./skills";

type SkillsByCategory = { [key in Category]?: Skill[] };

const skillsByCategory: SkillsByCategory = skills.reduce((acc, cur) => {
  const category = cur.category;

  if (acc[category]) {
    acc[category] = [...acc[category], cur];
  } else {
    acc[category] = [cur];
  }

  return acc;
}, {});

export default skillsByCategory;
