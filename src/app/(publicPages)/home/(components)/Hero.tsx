/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../(styles)/Hero.module.scss";
import { LinkWIthIcon, HaloDisplay } from "@/components/reuseables";
import hero_image from "./(images)/hero_image.png";

const Hero = () => {
  return (
    <>
      <section className={styles.Hero}>
        <Link className={styles.dashboard_button} href={"#"}>
          Watu user? Proceed to dashboard
        </Link>

        <h1>Boost voters participation in your paid vote contest</h1>

        <p className={styles.secondary_text}>
          Simplify voting management with our platform. Automatically generate
          USSD codes and account numbers for contestants, ensuring quick and
          secure voting
        </p>

        <LinkWIthIcon linkText="Create Contest" variant="light" />

        <img
          src={hero_image.src}
          alt="dashboard picture"
          className={styles.hero_image}
        />

        <HaloDisplay top={60} />
      </section>
    </>
  );
};

export default Hero;
