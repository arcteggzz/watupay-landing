/* eslint-disable @next/next/no-img-element */
import { HaloDisplay } from "@/components/reuseables";
import styles from "../(styles)/OngoingContests.module.scss";
import right_arrow from "./(images)/right_arrow.png";
import Link from "next/link";

const OngoingContests = () => {
  return (
    <>
      <section className={styles.OngoingContests}>
        <h2>Ongoing Contests</h2>

        <h6>
          Check out contests that are currently being run on our platform.
          Beauty Peagent, Reality TV show etc
        </h6>

        <div></div>

        <Link href={"#"} className={styles.view_contest}>
          <p>View all contest</p>
          <img src={right_arrow.src} alt="" />
        </Link>

        <HaloDisplay top={150} />
      </section>
    </>
  );
};

export default OngoingContests;
