import styles from "./styles.module.scss";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface GradeProps {
  grande: number;
}

function Grande({ grande }: GradeProps): JSX.Element {
  const completedStars = Math.floor(grande);
  const halfStars = grande - Math.floor(grande) > 0 ? 1 : 0;
  const emptyStars = 5 - (completedStars + halfStars);

  return (
    <div className={styles.root} aria-label={`grade ${grande}`}>
      {Array(completedStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className={styles.star} size={20} />
        ))}
      {Array(halfStars)
        .fill(0)
        .map((_, index) => (
          <FaStarHalfAlt key={index} className={styles.star} size={20} />
        ))}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} className={styles.star} size={20} />
        ))}
    </div>
  );
}

export default Grande;
