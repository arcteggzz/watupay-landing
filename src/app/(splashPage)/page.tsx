/* eslint-disable @next/next/no-img-element */

"use client";

import styles from "./page.module.scss";
import watupay_icon from "./watupay_icon.png";
import { useEffect } from "react";
import { routePaths } from "@/utils";
import { useRouter } from "next/navigation";

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(routePaths.HOMEPAGE);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={styles.SplashPage}>
      <img
        src={watupay_icon.src}
        alt="watupay logo icon"
        className={styles.splashImage}
      />
    </main>
  );
}
