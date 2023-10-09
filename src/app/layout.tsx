import "./globals.css";
import type { Metadata } from "next";
// import favIcon_watupay from "../../public/watupad_logo.svg";

export const metadata: Metadata = {
  title: "WatuVote",
  description: "Boost voters participation in your paid vote contest",
  // icons: {
  //   icon: favIcon_watupay,
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
