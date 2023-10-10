import styles from "./page.module.scss";
import {
  OrganizersList,
  Testimonials,
  SecurityAudit,
  CreateContest,
} from "./(components)";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <OrganizersList />
      <SecurityAudit />
      <Testimonials />
      <CreateContest />
    </div>
  );
};

export default HomePage;
