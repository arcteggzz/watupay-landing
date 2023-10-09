import styles from "./Navbar.module.scss";
import Link from "next/link";
import { routePaths } from "@/utils";

const Navbar = () => {
  return (
    <>
      <nav className={styles.Navbar}>Navbar</nav>
    </>
  );
};

export default Navbar;
