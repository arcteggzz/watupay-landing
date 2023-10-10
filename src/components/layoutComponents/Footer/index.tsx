/* eslint-disable @next/next/no-img-element */
import styles from "./Footer.module.scss";
import watupay_logo from "./images/watupay_logo.png";
import socials_links from "./images/socials.png";

const Footer = () => {
  return (
    <>
      <footer className={styles.Footer}>
        <div className={styles.footer_top}>
          <div className={styles.top_left}>
            <img src={watupay_logo.src} alt="WatuPay Logo" />
            <p>
              All-in-one Payments Platform gives you the latest technology and
              all the tools you need to get paid and grow your business.
            </p>
          </div>
          <div className={styles.top_middle}>
            <h5>Useful Links</h5>
            <div className={styles.middle_links}>
              <p>Documentation</p>
              <p>Terms</p>
              <p>Cooking Policy</p>
              <p>Contact us</p>
            </div>
          </div>
          <div className={styles.top_right}>
            <h5>Reach us</h5>
            <div className={styles.right_links}>
              <p>Phone: +234 906 000 1462</p>
              <p>Email: Support@watu.global</p>
            </div>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <p>
            Copyright © 2022. Watu Financial Technology Inc. All rights
            reserved.
          </p>
          <div className={styles.bottom_right}>
            <h5>Follow Us</h5>

            <img src={socials_links.src} alt="social dummy links" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
