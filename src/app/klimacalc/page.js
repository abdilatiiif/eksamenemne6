"use client";
import HeadingText from "@/components/HeadingText";

import { Calculator, Car, Utensils, Zap, Save } from "lucide-react";
import { useEffect, useState } from "react";

function KlimaCalcpage() {
  const [formdata, setFormdata] = useState({
    bilKm: 0, // km kjørt med bil per uke
    offentligTransport: 0, // timer kollektivt per uke
    flyr: 0, // antall flyreiser per år tur-retur
    kjøttretter: 0, // kjøttmåltider per uke
    beef: 0, // biff måltider per uke
    oppvarming: "strøm", // oppvarmingstype
    strøm: 0, // strømforbruk per måned i kWh
  });

  // State for beregnede resultater
  const [results, setResults] = useState(null);

  // Oppdatering av formdata state ved input endring
  useEffect(() => {
    kalkulerKlimafotavtrykk();
  }, [formdata]);

  const handleInputChange = (hva, value) => {
    setFormdata({ ...formdata, [hva]: Number(value) || Number("") });
  };

  const handleOppvarmingsType = (value) => {
    setFormdata({ ...formdata, oppvarming: value });
  };

  // Kalkulasjonslogikk
  {
    /* 
    Forklaring:

formData.carKm: antall km du kjører per uke.

* 52: gjør det om til km per år (52 uker i året).

* 0.12: hver km slipper ut ca. 0.13 kg CO₂/km (typisk bensinbil).

/ 1000: omgjøring fra kg til tonn.
    
    */
  }

  const kalkulerKlimafotavtrykk = () => {
    // Transport (per år)
    const bilUtslipp = (formdata.bilKm * 52 * 0.13) / 1000;
    const kollektivUtslipp = (formdata.offentligTransport * 52 * 0.5) / 1000;
    const flyUtslipp = formdata.flyr * 0.3; // per flytur (tur-retur)

    // Mat (per år)
    const kjøttUtslipp =
      ((formdata.kjøttretter - formdata.beef) * 52 * 6) / 1000; // 6 kg CO₂ per kg kjøtt (gjennomsnitt for ulike typer kjøtt).
    const beefUtslipp = (formdata.beef * 5 * 27) / 1000; //  27 kg CO₂ per kg kjøtt (livssyklusutslipp fra produksjon).
    const andreMatUtslipp = 1.5; // Annet matforbruk (frukt, grønnsaker, korn, meieriprodukter, osv.) per år i tonn CO₂.

    // Energi (per år)
    let oppvarmingsUtslipp = 0;

    switch (formdata.oppvarming) {
      case "electric":
        oppvarmingsUtslipp = (formdata.strøm * 12 * 0.3) / 1000; // 0.3 kg CO₂ per kWh (gjennomsnitt for elektrisitet i Norge).
        break;
      case "oil":
        oppvarmingsUtslipp = (formdata.strøm * 12 * 2.5) / 1000;
        break;
      case "gas":
        oppvarmingsUtslipp = (formdata.strøm * 12 * 1.8) / 1000;
        break;
      case "wood":
        oppvarmingsUtslipp = formdata.strøm * 12 * 0.5;
      default:
        formdata.strøm = 0;
    }

    // stømforbruk (per år)
    const strømUtslipp = (formdata.strøm * 12 * 0.3) / 1000; // 0.3 kg CO₂ per kWh (gjennomsnitt for elektrisitet i Norge).

    // Totalt klimafotavtrykk
    const transportTotal = bilUtslipp + kollektivUtslipp + flyUtslipp;
    const matTotal = kjøttUtslipp + beefUtslipp + andreMatUtslipp;
    const energiTotal = oppvarmingsUtslipp + strømUtslipp;
    const totalUtslipp = transportTotal + matTotal + energiTotal;

    // Sett resultater i state
    setResults({
      transport: transportTotal.toFixed(2),
      mat: matTotal.toFixed(2),
      energi: energiTotal.toFixed(2),
      total: totalUtslipp.toFixed(2),
      detaljer: {
        bil: bilUtslipp.toFixed(2),
        kollektiv: kollektivUtslipp.toFixed(2),
        fly: flyUtslipp.toFixed(2),
        kjøtt: kjøttUtslipp.toFixed(2),
        biff: beefUtslipp.toFixed(2),
        oppvarming: oppvarmingsUtslipp.toFixed(2),
        strøm: strømUtslipp.toFixed(2),
      },
    });
  };

  results && console.log("Results:", results);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Calculator size={60} className="text-green-600" />
        </div>

        <HeadingText textContent={"Klimakalkulator"} />
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Beregn ditt personlige klimafotavtrykk basert på transport, mat og
          energiforbruk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Car size={32} className="text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">Transport</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hvor mange km kjører du med bil per uke?
                </label>
                <input
                  type="number"
                  value={formdata.bilKm}
                  onChange={(e) => handleInputChange("bilKm", e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  placeholder=" ...."
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hvor mange timer bruker du kollektivtransport per uke?
                </label>
                <input
                  type="number"
                  value={formdata.offentligTransport}
                  onChange={(e) =>
                    handleInputChange("offentligTransport", e.target.value)
                  }
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  placeholder=" .... "
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hvor mange flyreiser (tur-retur) tar du per år?
                </label>
                <input
                  type="number"
                  min="0"
                  value={formdata.flyr}
                  onChange={(e) => handleInputChange("flyr", e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  placeholder=" .... "
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Utensils size={32} className="text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">Mat</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hvor mange kjøttmåltider spiser du per uke?
                </label>
                <input
                  type="number"
                  min="0"
                  value={formdata.kjøttretter}
                  onChange={(e) =>
                    handleInputChange("kjøttretter", e.target.value)
                  }
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  placeholder=" .... "
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Av disse, hvor mange er biff/storfekjøtt?
                </label>
                <input
                  type="number"
                  value={formdata.beef}
                  min="0"
                  onChange={(e) => handleInputChange("beef", e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  placeholder=" .... "
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Zap size={32} className="text-green-600" />
              <h2 className="text-2xl font-bold text-green-800">Energi</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hvordan varmer du opp boligen din?
                </label>
                <select
                  value={formdata.oppvarming}
                  onChange={(e) => handleOppvarmingsType(e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                >
                  <option value="electric">Elektrisitet (strøm)</option>
                  <option value="oil">Oljefyring</option>
                  <option value="gas">Gassfyring</option>
                  <option value="wood">Ved</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Hvor mye strøm bruker du per måned? (kWh)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formdata.strøm}
                  onChange={(e) => handleInputChange("strøm", e.target.value)}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none"
                  placeholder=" ...."
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* -----------------------   Resultatseksjon ------------------------ */}
          {results && (
            <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg sticky top-4">
              <h2 className="text-2xl font-bold mb-4">
                Ditt Årlig klimaforbruk
              </h2>

              {/* Total */}
              <div className="bg-white text-green-800 p-4 rounded-lg mb-4 text-center">
                <div className="text-5xl font-bold">{results.total}</div>
                <div className="text-lg">tonn CO₂ per år</div>
              </div>

              {/* Kategorier */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Car size={20} />
                    <span>Transport</span>
                  </div>
                  <span className="font-bold">{results.transport} tonn</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Utensils size={20} />
                    <span>Mat</span>
                  </div>
                  <span className="font-bold">{results.mat} tonn</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Zap size={20} />
                    <span>Energi</span>
                  </div>
                  <span className="font-bold">{results.energi} tonn</span>
                </div>
              </div>

              {/* Sammenligning */}
              <div className="mt-6 pt-6 border-t border-green-400">
                <p className="text-sm">
                  <strong>Norsk gjennomsnitt:</strong> 7,8 tonn/år
                </p>
                <p className="text-sm mt-2">
                  <strong>Gjennomsnitt for EU (2023):</strong> 5,6 tonn/år
                </p>
              </div>

              {/* Lagre knapp */}
              <button
                onClick={() => console.log("Lagre resultat")}
                className="cursor-pointer w-full mt-6 bg-white text-green-600 px-4 py-3 rounded-lg font-bold hover:bg-green-50 transition flex items-center justify-center gap-2"
              >
                <Save size={20} />
                Lagre resultat
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default KlimaCalcpage;
