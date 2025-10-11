import { Leaf, HandHelping } from "lucide-react";
import { tiltak } from "../../data/tiltak.js";
import TilTakKort from "../../components/TilTakKort.jsx";
import HeadingText from "@/components/HeadingText.jsx";

export default function TiltakPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Overskrift */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <HandHelping size={70} className="text-green-600" />
        </div>

        <HeadingText textContent={"10 Klimatiltak du kan gjøre"} />

        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Små endringer i hverdagen kan gjøre stor forskjell. Her er 10 konkrete
          tiltak som reduserer CO₂-utslipp og bidrar til en grønnere fremtid.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {tiltak.map((t) => (
          <TilTakKort key={t.id} tiltak={t} />
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-green-100 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Hvorfor er dette viktig?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Klimaendringer påvirker oss alle. Gjennom bevisste valg i hverdagen
          kan vi redusere vårt klimafotavtrykk betydelig. Hvert tiltak teller,
          og sammen kan vi skape en bærekraftig fremtid. Klikk på tiltakene over
          for å lære mer om hvordan du kan implementere dem i din hverdag.
        </p>
      </div>
    </div>
  );
}

// husk gjennomsnitt per nordmeenn
