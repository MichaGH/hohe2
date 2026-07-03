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
  title: "Hohe Warte — Tennis Academy, Vienna",
  description:
    "A century of tennis on Vienna's Hohe Warte hill. Elite coaching, indoor & outdoor courts, fitness and summer camps — where discipline becomes art.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
