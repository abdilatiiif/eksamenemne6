import Link from "next/link";
import { Leaf, TrendingDown, Calculator } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="relative h-64 md:h-96 mb-12 overflow-hidden ">
        <img src="/forest.jpeg" alt="Forest" className=" kenburns-top-right " />
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Leaf size={80} className="text-green-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-green-600 mb-6">
            Velkommen til Klimakampen
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Skape en grønnere fremtid starter med kunnskap. Utforsk kraftfulle
            klimatiltak, sammenlign globale utslipp, og kartlegg ditt eget
            fotavtrykk. Ditt valg har betydning.
          </p>
        </div>

        <div className=" border-cardto max-w-6xl mx-auto mb-16 bg-white p-8 ">
          <h2 className="text-2xl font-bold text-green-800 mb-4">
            Hva kan du gjøre her?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Bli en del av løsningen. På denne siden deler vi konkrete
            klimatiltak for deg, viser hvordan land sammenligner seg, og hjelper
            deg å forstå ditt eget utslipp. For en bedre fremtid, handling etter
            handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto ">
          <Link
            href="/tiltak"
            className="bg-white p-8 border-card rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <Leaf size={48} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3 text-center">
              Klimatiltak
            </h3>
            <p className="text-gray-600 text-center">
              Oppdag 10 konkrete tiltak du kan gjøre for å redusere ditt
              klimafotavtrykk. Fra solenergi til plantebasert mat.
            </p>
            <div className="mt-6 text-center">
              <span className="text-green-600 font-semibold">
                Utforsk tiltak →
              </span>
            </div>
          </Link>

          <Link
            href="/verstinger"
            className="bg-white border-card p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <TrendingDown size={48} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3 text-center">
              Klima-verstinger
            </h3>
            <p className="text-gray-600 text-center">
              Se de 20 landene med høyest CO₂-utslipp per innbygger. Sammenlign
              tall i tabell eller graf.
            </p>
            <div className="mt-6 text-center">
              <span className="text-green-600 font-semibold">
                Se statistikk →
              </span>
            </div>
          </Link>

          <Link
            href="/kalkulator"
            className="bg-white border-card p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">
              <Calculator size={48} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3 text-center">
              Klimakalkulator
            </h3>
            <p className="text-gray-600 text-center">
              Beregn ditt personlige klimafotavtrykk basert på transport, mat,
              og energiforbruk. Få tips til forbedring.
            </p>
            <div className="mt-6 text-center">
              <span className="text-green-600 font-semibold">
                Beregn fotavtrykk →
              </span>
            </div>
          </Link>
        </div>

        <div className="border-cardto mt-16 text-center max-w-4xl mx-auto bg-green-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Hver handling teller!</h2>
          <p className="text-lg mb-6">
            Bak hvert strømbrudd, hver flom og hver hetebølge ligger et felles
            ansvar. Men løsningen ligger også der – i våre hender. Ta grep i din
            hverdag og vær delen av svaret.
          </p>
          <Link
            href="/tiltak"
            className="vibrate-1 inline-block bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:bg-green-50 transition"
          >
            Kom i gang nå
          </Link>
        </div>
      </div>
    </>
  );
}
