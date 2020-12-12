import styles from "./styles.module.scss";

function CoverLetter(): JSX.Element {
  return (
    <div className={styles.root}>
      <p>
        I have been working with web development since 2018, I have a degree in
        computing engineering and I am passionate about <b>Javascript</b>.
      </p>
      <p>
        I have professional experiences with <b>ReactJS</b>, <b>NodeJS</b>,{" "}
        <b>Redux</b>, <b>GraphQL</b>, and other javascript libraries,
        furthermore, <b>I am willing to learn new technologies</b>.
      </p>
      <p>
        Even in my free time, I am still coding and reading something about
        programming, currently, my focus is on <b>Clean Code</b>,{" "}
        <b>Clean Architecture</b>, and <b>Design Patterns</b>.
      </p>
    </div>
  );
}

export default CoverLetter;
