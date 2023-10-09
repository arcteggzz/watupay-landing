"use client";

import styles from "./page.module.scss";
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
    <main className={styles.main}>
      <p>Splash Page</p>
    </main>
  );
}
