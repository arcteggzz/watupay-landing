import styles from "./page.module.scss";
import { Testimonials, SecurityAudit, CreateContest } from "./(components)";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <SecurityAudit />
      <Testimonials />
      <CreateContest />
    </div>
  );
};

export default HomePage;
