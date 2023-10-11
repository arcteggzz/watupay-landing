/* eslint-disable @next/next/no-img-element */
import styles from "./HaloDisplay.module.scss";

const HaloDisplay = ({ top = 100 }: { top?: number }) => {
  const halo_display_style = {
    top: `${top}%`,
  };

  return (
    <>
      <div className={styles.HaloDisplay} style={halo_display_style}>
        <div className={styles.halo_internal}></div>
      </div>
    </>
  );
};

export default HaloDisplay;
