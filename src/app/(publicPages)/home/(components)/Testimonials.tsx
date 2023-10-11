/* eslint-disable @next/next/no-img-element */
import styles from "../(styles)/Testimonial.module.scss";
import dummy_testimonials from "./(images)/testimonial_dummy.png";
import previous_icon from "./(images)/previous_icon.png";
import next_icon from "./(images)/next_icon.png";
import { HaloDisplay } from "@/components/reuseables";

const Testimonials = () => {
  return (
    <>
      <section className={styles.Testimonials}>
        <h4>Testimonials</h4>
        <p>See what our users are saying about our products</p>

        <img src={dummy_testimonials.src} alt="testimonal dummy" />

        <div className={styles.button_container}>
          <button className={styles.button}>
            <img src={previous_icon.src} alt="previous button" />
          </button>
          <button className={styles.button}>
            <img src={next_icon.src} alt="next button" />
          </button>
        </div>

        <HaloDisplay />
      </section>
    </>
  );
};

export default Testimonials;
