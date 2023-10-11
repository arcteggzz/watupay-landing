/* eslint-disable @next/next/no-img-element */
import { HaloDisplay, Carousel } from "@/components/reuseables";
import styles from "../(styles)/OrganizersList.module.scss";

const OrganizersList = () => {
  return (
    <>
      <section className={styles.OrganizersList}>
        <h2>We are trusted by over 500+ Contests organizers</h2>

        <p>
          Over 500+ contests organizers has used our platoform to successfully
          organize their contest.
        </p>

        <Carousel />

        <HaloDisplay />
      </section>
    </>
  );
};

export default OrganizersList;
