import styles from "./page.module.scss";
import {
  OrganizersList,
  Testimonials,
  SecurityAudit,
  CreateContest,
  Features,
  Hero,
  OngoingContests,
} from "./(components)";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <Hero />
      <OrganizersList />
      <Features />
      <SecurityAudit />
      <OngoingContests />
      <Testimonials />
      <CreateContest />
    </div>
  );
};

export default HomePage;
