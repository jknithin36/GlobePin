import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <h6 className={styles.logo}>GLOBEPIN </h6>
    </Link>
  );
}

export default Logo;
