import skills, { Category, Skill } from "./skills";

type SkillsByCategory = { [key in Category]: Skill[] };

const initialValue: SkillsByCategory = {
  Languages: [],
  Frameworks: [],
  Libraries: [],
  Tools: [],
};

const skillsByCategory: SkillsByCategory = skills.reduce((acc, cur) => {
  const category = cur.category;

  acc[category] = [...acc[category], cur];

  return acc;
}, initialValue);

export default skillsByCategory;
