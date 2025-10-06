"use client";

import { ArrowRight } from "lucide-react";
import { TrendingDown, List, ChartBar } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function VerstingerPage() {
  const [view, setView] = useState("list");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <TrendingDown size={60} className="text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
          Klima-verstinger
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Topp 20 land med høyest CO₂-utslipp per innbygger per år. Data viser
          tonn CO₂ per person.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setView("list")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            view === "list"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border-2 border-green-600 hover:bg-green-100"
          }`}
        >
          <List size={20} />
          Liste
        </button>
        <button
          onClick={() => setView("chart")}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
            view === "chart"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600 border-2 border-green-600 hover:bg-green-100"
          }`}
        >
          <ChartBar size={20} />
          Graf
        </button>
      </div>

      <div className="mt-12 max-w-3xl mx-auto bg-green-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Hva betyr disse tallene?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-3">
          Tallene viser tonn CO₂-ekvivalenter per person per år. Dette
          inkluderer utslipp fra transport, industri, energiproduksjon og
          forbruk.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Land med høyt utslipp per innbygger har ofte høy levestandard, mye
          bilkjøring, og/eller stor andel fossil energi. Selv om Norge har ren
          strøm, har vi høyt forbruk og mye flyreiser som bidrar til utslipp.
        </p>

        <Link
          href="/utrening"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8"
        >
          <ArrowRight size={20} />
          Hvordan regner vi ut? Les mer her.
        </Link>
      </div>
    </div>
  );
}

export default VerstingerPage;

/*
    {view === "list" ? (
        <ListView data={verstinger} />
      ) : (
        <ChartView data={verstinger} />
      )}
 */

// list og chart visning er ikke implementert enda
