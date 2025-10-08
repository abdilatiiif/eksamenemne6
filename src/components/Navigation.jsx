"use client";

import Link from "next/link";
import {
  Leaf,
  House,
  HandHelping,
  FlameKindling,
  Calculator,
  X,
} from "lucide-react";
import { useState } from "react";
import { Menu } from "lucide-react";
import Head from "next/head";
import HeadingText from "./HeadingText";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#a9e190] flex justify-between px-4 p-5  shadow-lg border-white">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold hover:text-green-600 transition cursor-pointer"
        >
          <Leaf size={32} />
          <HeadingText
            size={"text-2xl"}
            textContent={"Klimakampen"}
            color={"text-black"}
            loop={false}
          />
        </Link>

        {
          // desktop menu
        }
        <nav className="hidden md:flex gap-3 ">
          <Link
            href="/"
            className="hover:text-green-200 transition font-medium "
          >
            <button className="relative mt-3 p-2 text-md text-white overflow-hidden rounded-full group cursor-pointer ">
              <span className="relative z-10 text-white mix-blend-difference flex">
                {" "}
                <House size={20} /> Hjem
              </span>
              <span className="absolute left-0 top-0 h-full w-2/4 bg-white rounded-full transition-all duration-[850ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:w-full"></span>
            </button>
          </Link>
          <Link
            href="/tiltak"
            className="hover:text-green-200 transition font-medium flex"
          >
            <button className="relative mt-3 p-2 text-md text-white overflow-hidden rounded-full cursor-pointer group">
              <span className="relative z-10 text-white mix-blend-difference flex">
                {" "}
                <HandHelping size={20} /> Tiltak
              </span>
              <span className="absolute left-0 top-0 h-full w-2/4 bg-white rounded-full transition-all duration-[850ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-pointer group-hover:w-full"></span>
            </button>
          </Link>
          <Link
            href="/verstinger"
            className="hover:text-green-200 transition font-medium flex"
          >
            <button className="relative mt-3 p-2 text-md text-white overflow-hidden rounded-full cursor-pointer group">
              <span className="relative z-10 text-white mix-blend-difference flex">
                {" "}
                <FlameKindling size={20} />{" "}
                <span className="text-red-500">Verstinger </span>
              </span>
              <span className="absolute left-0 top-0 h-full w-2/6 bg-white rounded-full transition-all duration-[850ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] cursor-pointer group-hover:w-full"></span>
            </button>
          </Link>
          <Link
            href="/klimacalc"
            className="hover:text-red-500 transition font-medium flex"
          >
            <button className="relative mt-3 p-2 text-md text-white overflow-hidden rounded-full group cursor-pointer">
              <span className="relative z-10 text-white mix-blend-difference flex">
                {" "}
                <Calculator size={20} /> Klimakalkulator
              </span>
              <span className="absolute left-0 top-0 h-full w-1/4 bg-white rounded-full transition-all duration-[850ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] group-hover:w-full"></span>
            </button>
          </Link>
        </nav>

        {
          // mobil menu vises ved klikk
        }

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu cursor-pointer"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden tilt-in-top-1 bg-white items-center flex justify-center flex-col pb-4">
          <Link
            href="/"
            className="hover:text-green-200 transition font-medium py-2 flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            Hjem <House size={16} />
          </Link>
          <Link
            href="/tiltak"
            className="hover:text-green-200 transition font-medium py-2 flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            Tiltak <HandHelping size={16} />
          </Link>
          <Link
            href="/verstinger"
            className="hover:text-red-500 transition font-medium py-2 flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-red-500">Verstinger</span>{" "}
            <FlameKindling size={16} />
          </Link>
          <Link
            href="/klimacalc"
            className="hover:text-green-200 transition font-medium py-2 flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            Klimakalkulator <Calculator size={16} />
          </Link>
        </nav>
      )}
    </>
  );
}

export default Navigation;
