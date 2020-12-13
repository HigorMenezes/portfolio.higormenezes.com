import skills from "./skills";

const mainSkillsId = [1, 2, 3, 4, 5];

const mainSkills = skills.filter((skill) => mainSkillsId.includes(skill.id));

export default mainSkills;
