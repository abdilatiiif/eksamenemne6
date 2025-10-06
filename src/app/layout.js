"use client";

import "./globals.css";
import Navigation from "../components/Navigation.jsx";
import { Ubuntu } from "next/font/google";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Animation variants for page transitions
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      z: -800,
    },
    enter: {
      opacity: 1,
      scale: 1,
      y: 0,
      z: 0,
      transition: {
        duration: 0.7,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.7,
      y: -50,
      z: -800,
      transition: {
        duration: 0.7,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  };

  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pathname}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="min-h-screen"
          >
            <div className="max-w-8xl md:mx-auto bg-[#a9e190]">
              <Navigation />
              {children}
              <Footer />
            </div>
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
