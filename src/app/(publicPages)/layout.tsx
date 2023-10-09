import styles from "./layout.module.scss";
import type { Metadata } from "next";
import { Navbar, Footer } from "@/components/layoutComponents";

export const metadata: Metadata = {
  title: "WatuVote Home",
  description:
    "Simplify voting management with our platform. Automatically generate USSD codes and account numbers for contestants, ensuring quick and secure voting",
};

export default function PublicPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.PublicPageLayout}>
        <div className={styles.main_container}>
          <div className={styles.Navbar_container}>
            <div className={styles.Navbar_Child_Container}>
              <Navbar />
            </div>
          </div>
          <div className={styles.Outlet_container}>
            <div className={styles.Outlet_Child_Container}>{children}</div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
