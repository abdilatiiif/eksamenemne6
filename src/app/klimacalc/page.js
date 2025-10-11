"use client";
import HeadingText from "@/components/HeadingText";
import { set } from "animejs";
import { Calculator, Car, Utensils, Zap, Save } from "lucide-react";
import { useState } from "react";

function KlimaCalcpage() {
  const [formdata, setFormdata] = useState({
    bilKm: 0, // km kjørt med bil per uke
    offentligTransport: 0, // timer kollektivt per uke
    flyr: 0, // antall flyreiser per år
    kjøttretter: 0, // kjøttmåltider per uke
    beef: 0, // biff måltider per uke
    oppvarming: "strøm", // oppvarmingstype
    strøm: 0, // strømforbruk per måned i kWh
  });

  const handleInputChange = (hva, value) => {
    setFormdata({ ...formdata, [hva]: Number(value) || Number("") });
  };

  const handleOppvarmingsType = (value) => {
    setFormdata({ ...formdata, oppvarming: value });
  };

  console.log(formdata);

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
    // Transport
    const bilUtslipp = (formdata.bilKm * 52 * 0.13) / 1000;
  };

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
                  min=""
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
          Resultater <Save />
        </div>
      </div>
    </div>
  );
}

export default KlimaCalcpage;
