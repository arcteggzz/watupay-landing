/* eslint-disable @next/next/no-img-element */
import styles from "./OngoingContest.module.scss";
import finger_print from "./finger_print.png";

interface OngoingContestType {
  bannerImage: string;
  name: string;
  description: string;
  bankDetails: string;
}

const OngoingContest = ({
  bannerImage,
  description,
  name,
  bankDetails,
}: OngoingContestType) => {
  return (
    <>
      <div className={styles.OngoingContest}>
        <img
          src={bannerImage}
          alt="Contest Banner"
          className={styles.banner_image}
        />

        <div className={styles.text_contianer}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.decription}>{description}</p>
        </div>

        <div className={styles.card_bottom}>
          <h4 className={styles.details}>{bankDetails}</h4>
          <button>
            <h5 className={styles.vote}>Vote</h5>
            <img
              src={finger_print.src}
              alt="finger print icon"
              className={styles.print_icon}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default OngoingContest;
