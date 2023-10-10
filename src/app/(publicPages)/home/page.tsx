import styles from "./page.module.scss";
import { Testimonials, SecurityAudit } from "./(components)";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <SecurityAudit />
      <Testimonials />
    </div>
  );
};

export default HomePage;
