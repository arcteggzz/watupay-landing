/* eslint-disable @next/next/no-img-element */
"use client";

import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import watu_vote_logo from "./images/watu_vote_logo.png";
import closeBurger from "./images/closeBurger.png";
import openBurger from "./images/openBurger.png";
import { LinkWIthIcon } from "@/components/reuseables";
import { routePaths } from "@/utils";
import { useState } from "react";

const Navbar = () => {
  const navElements = [
    { link: routePaths.HOMEPAGE, name: "Home" },
    { link: "/", name: "Contests" },
    { link: "/", name: "Pricing & FAQs" },
  ];

  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  console.log(pathname);

  return (
    <>
      <nav className={styles.Navbar}>
        <div className={styles.desktop_Nav}>
          <Link href={"/"} className={styles.logo_icon}>
            <img src={watu_vote_logo.src} alt="Watuvote icon" />
          </Link>

          {/* desktop middle */}
          <div className={styles.navLinks_Desktop}>
            {navElements.map((elem) => {
              return (
                <Link
                  href={elem.link}
                  key={elem.name}
                  className={
                    pathname === elem.link
                      ? styles.active_NavLink
                      : styles.inactive_NavLink
                  }
                >
                  {elem.name}
                </Link>
              );
            })}
          </div>

          <div className={styles.link_container}>
            <LinkWIthIcon linkText="Create Contest" variant="light" />
          </div>

          {/* mobile hamburger controller */}
          <button
            onClick={() => setMobileNavOpen((mobileNavOpen) => !mobileNavOpen)}
            className={styles.hamburger}
          >
            <img
              src={mobileNavOpen ? closeBurger.src : openBurger.src}
              alt="Hamburger Menu Button"
            />
          </button>
        </div>

        <div
          className={
            mobileNavOpen
              ? styles.Mobile_NavbarOpen
              : styles.Mobile_NavbarClosed
          }
        >
          <section className={styles.Navlinks_Mobile}>
            {navElements.map((elem) => {
              return (
                <Link
                  href={elem.link}
                  key={`${elem.link}_mobile`}
                  className={
                    pathname === elem.link
                      ? styles.active_mobile_NavLink
                      : styles.inactive_mobile_NavLink
                  }
                >
                  {elem.name}
                </Link>
              );
            })}
          </section>
          <LinkWIthIcon linkText="Create Contest" variant="light" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
