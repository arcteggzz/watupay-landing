/* eslint-disable @next/next/no-img-element */
import styles from "./LinkWIthIcon.module.scss";
import Link from "next/link";
import view_icon from "./images/next_icon.png";

interface LinkWIthIconType {
  variant?: "light" | "dark";
  linkText: string;
}

const LinkWIthIcon = ({ variant = "dark", linkText }: LinkWIthIconType) => {
  return (
    <>
      <Link
        href={"#"}
        className={
          variant === "dark"
            ? styles.LinkWIthIcon_dark
            : styles.LinkWIthIcon_light
        }
      >
        <p
          className={
            variant === "dark" ? styles.linkText_light : styles.linkText_dark
          }
        >
          {linkText}
        </p>
        <img src={view_icon.src} alt="view icon" className={styles.link_icon} />
      </Link>
    </>
  );
};

export default LinkWIthIcon;
