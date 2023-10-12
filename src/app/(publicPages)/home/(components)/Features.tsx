/* eslint-disable @next/next/no-img-element */
import styles from "../(styles)/Features.module.scss";
import features_1 from "./(images)/features_1.png";
import features_2 from "./(images)/features_2.png";
import Link from "next/link";
import view_icon from "./(images)/next_icon.png";

const Features = () => {
  return (
    <>
      <section className={styles.Features}>
        <h3>
          Get a record breaking voters turnout that beats your imagination
        </h3>

        <p>
          We have made the voting process effortlessly seamless to encourage
          people to vote for preferred contestants seamlessly
        </p>

        <div className={styles.features_one}>
          <img src={features_1.src} alt="features one" />
          <div className={styles.right_text}>
            <h5>Special account number & USSD Code for each contestant</h5>
            <p>
              {
                " Voting is a breeze with our platform. Voters can simply dial the USSD code or transfer funds to the contestant's unique account number and also utilize various payment channel like Cards..."
              }
            </p>
          </div>
        </div>

        <div className={styles.features_two}>
          <img
            src={features_2.src}
            alt="features one"
            className={styles.mobile_image}
          />
          <div className={styles.left_text}>
            <h5>Easily view real time result and export from our dashboard</h5>
            <p>
              You can easily see all the details of your contest result. Result
              can be made public or private based on preference
            </p>
          </div>
          <img src={features_2.src} alt="features one" />
        </div>

        <Link href={"#"} className={styles.link_container}>
          <h6 className={styles.link_text}>Create Contest</h6>
          <img
            src={view_icon.src}
            alt="view icon"
            className={styles.link_icon}
          />
        </Link>
      </section>
    </>
  );
};

export default Features;
