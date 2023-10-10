/* eslint-disable @next/next/no-img-element */
import styles from "../(styles)/CreateContest.module.scss";
import { LinkWIthIcon } from "@/components/reuseables";
import { HaloDisplay } from "@/components/reuseables";

const CreateContest = () => {
  return (
    <>
      <section className={styles.CreateContest}>
        <h2>Ready to get started?</h2>

        <LinkWIthIcon linkText="Create Contest" variant="light" />

        <HaloDisplay top={270} />
      </section>
    </>
  );
};

export default CreateContest;
