/* eslint-disable @next/next/no-img-element */
import styles from "./Carousel.module.scss";
import organizer_1 from "@/app/(publicPages)/home/(components)/(images)/organizers_1.png";
import organizer_2 from "@/app/(publicPages)/home/(components)/(images)/organizers_2.png";
import organizer_3 from "@/app/(publicPages)/home/(components)/(images)/organizers_3.png";
import organizer_4 from "@/app/(publicPages)/home/(components)/(images)/organizers_4.png";
import organizer_5 from "@/app/(publicPages)/home/(components)/(images)/organizers_5.png";
import organizer_6 from "@/app/(publicPages)/home/(components)/(images)/organizers_6.png";

const Carousel = () => {
  const carousel_images = [
    organizer_1,
    organizer_2,
    organizer_3,
    organizer_4,
    organizer_5,
    organizer_6,
  ];

  return (
    <>
      <div className={styles.carousel_slider_container}>
        <div className={styles.Carousel}>
          {carousel_images.map((image, index) => {
            return (
              <>
                <div key={image.src} className={styles.single_item_container}>
                  <img src={image.src} alt={`organizer's ${index}`} />
                </div>
              </>
            );
          })}
          {carousel_images.map((image, index) => {
            return (
              <>
                <div key={image.src} className={styles.single_item_container}>
                  <img src={image.src} alt={`organizer's ${index}`} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
