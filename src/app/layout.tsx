import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PNCHR",
  description: "Boxing workouts and interval timer",
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
