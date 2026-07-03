import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata = {
  title: "Hohe Warte — Tennisakademie, Wien",
  description:
    "Ein Jahrhundert Tennis auf der Wiener Hohen Warte. Elite-Training, Hallen- und Freiplätze, Fitness und Sommercamps — wo Disziplin zur Kunst wird.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${geist.variable} ${instrument.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
