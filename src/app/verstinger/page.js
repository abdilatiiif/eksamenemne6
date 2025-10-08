"use client";

import { ArrowRight } from "lucide-react";
import { TrendingDown, List, ChartBar, ChartSpline } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { verstinger } from "../../data/verstinger.js";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import HeadingText from "@/components/HeadingText.jsx";

console.log("verstinger data:", verstinger);

function VerstingerPage() {
  const [view, setView] = useState("list");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <TrendingDown size={60} className="text-green-600" />
        </div>

        <HeadingText textContent={"Klima-verstinger"} />
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

      {
        // visning av liste eller graf
      }

      {view === "chart" ? (
        <GrafView data={verstinger} />
      ) : (
        <ListView data={verstinger} />
      )}

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
          href="/verstinger/utregning"
          className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8"
        >
          <ArrowRight size={20} />
          Hvordan regner vi ut? Les mer her.
        </Link>
      </div>
    </div>
  );
}

function ListView({ data }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-green-700 text-white px-6 py-4 grid grid-cols-3 gap-4 font-bold">
        <div>Plassering</div>
        <div>Land</div>
        <div className="text-right">CO₂ per persons (tonn/år)</div>
      </div>

      <div className="divide-y">
        {data.map((country) => (
          <div
            key={country.rank}
            className="px-6 py-4 grid grid-cols-3 gap-4 hover:bg-green-50 transition"
          >
            <div className="flex items-center">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                #{country.rank}#
              </span>
            </div>

            <div className="flex items-center font-medium text-gray-800">
              {country.country}
            </div>

            <div className="flex items-center justify-end">
              <span className="text-lg font-bold text-red-600">
                {country.co2PerPerson}
              </span>
              <span className="ml-1 text-gray-500 text-sm">tonn</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrafView({ data }) {
  console.log("Rendering GrafView with data:", data);
  // fargefunksjon for stolpene
  const getColor = (value) => {
    if (value > 20) return "#dc2626";
    if (value > 15) return "#ef4444";
    if (value > 10) return "#f97316";
    if (value > 7) return "#f59e0b";
    return "#84cc16";
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        CO₂-utslipp per innnbyggere (tonn per år)
      </h2>

      <ResponsiveContainer
        className={`${"bg-green-200 w-full rounded-2xl"}`}
        height={600}
      >
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 100 }}
        >
          <CartesianGrid strokeDasharray="2 2" />

          {/* X-akse med landnavn */}
          <XAxis
            dataKey="country"
            angle={-45}
            textAnchor="end"
            height={150}
            interval={0}
            className="bg-green-500"
            style={{ fontSize: "12px", fontWeight: "bold" }}
          />

          {/* Y-akse venstre side */}
          <YAxis
            label={{
              value: "CO₂ (tonn/år) 🌎",
              angle: -90,
              position: "insideLeft",
            }}
          />

          <Tooltip
            hovertekst={(value) => [`${value} tonn `, "CO₂ per person"]}
            contentStyle={{
              backgroundColor: "#f0fdf4",
              color: "#166534",
              border: "2px solid #16a34a",
            }}
          />

          <Bar dataKey="co2PerPerson" radius={[8, 8, 0, 0]}>
            {data.map(
              (entry, index) => (
                console.log("Entry:", entry, "Index:", index),
                (
                  <Cell
                    key={`cell-${index}`}
                    fill={getColor(entry.co2PerPerson)}
                  />
                )
              )
            )}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default VerstingerPage;
