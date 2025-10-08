import { ArrowRight } from "lucide-react";

import Link from "next/link";

function utregningPage() {
  console.log("Rendering UtregningPage");
  return (
    <>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            CO₂-utslipp utregning
          </h1>
          <p className="text-xl text-gray-600">
            Forstå hvordan man beregner totale utslipp og utslipp per person
          </p>
        </header>
        <section className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <i className="fas fa-info-circle text-blue-500 text-xl mr-3"></i>
            <h2 className="text-2xl font-semibold text-gray-800">
              Introduksjon
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            Det er en viktig forskjell mellom totalt CO₂-utslipp og utslipp per
            person. Begge tallene gir verdifull informasjon, men forteller ulike
            historier om et lands klimapåvirkning.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="text-gray-700">
              <span className="font-semibold">Totalt utslipp</span> måler
              absolutt påvirkning på klimaet.
              <span className="font-semibold">Utslipp per person</span> måler
              gjennomsnittlig forbruk og levestandard.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg  p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-industry text-red-500 text-xl mr-3"></i>
              <h2 className="text-2xl font-semibold text-gray-800">
                Totalt Nasjonalt CO₂-utslipp
              </h2>
            </div>

            <p className="text-gray-700 mb-4">
              Den totale mengden CO₂ som frigjøres innenfor et lands grenser
              over en periode (vanligvis ett år). Måles i millioner av tonn CO₂
              (Mt CO₂).
            </p>

            <div className="bg-red-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-red-700 mb-2">
                Hva inkluderes:
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Forbrenning av fossile brensler (kull, olje, gass)</li>
                <li>Energiproduksjon, industri, transport, husholdninger</li>
                <li>Industrielle prosesser (sement, kjemikalier)</li>
                <li>Landbruks- og skogbruksendringer (avskoging)</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Beregning:</h3>
              <p className="text-gray-700 mb-2">
                Basert på "oppstrøms"-estimering - beregner utslipp basert på
                forbruk av fossilt brensel.
              </p>
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-gray-800">
                  Totalt utslipp = (Mengde kull × utslippsfaktor) + (Mengde olje
                  × utslippsfaktor) + (Mengde gass × utslippsfaktor) + ...
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-user text-green-500 text-xl mr-3"></i>
              <h2 className="text-2xl font-semibold text-gray-800">
                Utslipp per Innbygger
              </h2>
            </div>

            <p className="text-gray-700 mb-4">
              Et gjennomsnitt som viser hvor mye hver person i landet ville
              "stått for" dersom de totale utslippene ble fordelt likt på alle
              innbyggerne.
            </p>

            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <h3 className="font-semibold text-green-700 mb-2">
                Hva det måler:
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Gjennomsnittlig karbonintensivitet i et land</li>
                <li>Levestandard og forbruksvaner</li>
                <li>Effektiviteten i økonomien</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Beregning:</h3>
              <p className="text-gray-700 mb-2">
                Enkel divisjon av totale utslipp på befolkningstall.
              </p>
              <div className="bg-white p-3 rounded border">
                <code className="text-sm text-gray-800">
                  Utslipp per innbygger = Totalt utslipp / Befolkning
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Eksempel på Beregning
            </h2>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">
                  Totalt Utslipp
                </h3>
                <p className="text-gray-700">
                  Land forbruker 1 million tonn kull med utslippsfaktor 2,5 tonn
                  CO₂ per tonn kull:
                </p>
                <div className="bg-white p-3 rounded border mt-2">
                  <code className="text-sm text-gray-800">
                    1 000 000 tonn kull × 2,5 tonn CO₂/tonn kull ={" "}
                    <span className="font-bold">2 500 000 tonn CO₂</span>
                  </code>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-700 mb-2">
                  Utslipp per Person
                </h3>
                <p className="text-gray-700">
                  Land med 50 millioner tonn CO₂ totalt og 5 millioner
                  innbyggere:
                </p>
                <div className="bg-white p-3 rounded border mt-2">
                  <code className="text-sm text-gray-800">
                    50 000 000 tonn CO₂ ÷ 5 000 000 innbyggere ={" "}
                    <span className="font-bold">10 tonn CO₂ per innbygger</span>
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Analogien med Bursdagskake
            </h2>

            <div className="flex justify-center mb-4">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full bg-yellow-200 border-2 border-yellow-400"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-yellow-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-32 bg-yellow-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-yellow-700 rotate-45"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-24 bg-yellow-700 rotate-45"></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start">
                <i className="fas fa-cake text-yellow-500 mt-1 mr-2"></i>
                <div>
                  <span className="font-semibold">Totalt utslipp</span> ={" "}
                  <span className="text-yellow-600">
                    Størrelsen på hele kaken
                  </span>
                  <p className="text-sm text-gray-600">
                    Stort land med mye industri = stor kake
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <i className="fas fa-utensils text-yellow-500 mt-1 mr-2"></i>
                <div>
                  <span className="font-semibold">Utslipp per innbygger</span> ={" "}
                  <span className="text-yellow-600">
                    Størrelsen på kakestykket
                  </span>
                  <p className="text-sm text-gray-600">
                    Stor kake + få barn = store kakestykker
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
              <p className="text-gray-700">
                <span className="font-semibold">Kina/India:</span> Stor kake,
                men delt mellom mange → små kakestykker
                <span className="font-semibold"> Qatar/Norge:</span> Middels
                kake, delt mellom få → store kakestykker
              </p>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-4">
            <i className="fas fa-exclamation-triangle text-orange-500 text-xl mr-3"></i>
            <h2 className="text-2xl font-semibold text-gray-800">
              Viktige Poenger
            </h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <i className="fas fa-fire text-orange-500 mt-1 mr-3"></i>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Utslippsfaktorer
                </h3>
                <p className="text-gray-700">
                  Utslipp varierer mellom brensler. Naturgass slipper ut mindre
                  CO₂ per energienhet enn kull.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-ship text-orange-500 mt-1 mr-3"></i>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Importerte/eksporterte varer
                </h3>
                <p className="text-gray-700">
                  De fleste tallene er for "territoriale utslipp" og inkluderer
                  ikke utslipp fra produksjon av importerte varer.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <i className="fas fa-users text-orange-500 mt-1 mr-3"></i>
              <div>
                <h3 className="font-semibold text-gray-800">Befolkningsdata</h3>
                <p className="text-gray-700">
                  Bruker vanligvis midtårsestimater for befolkningen for det
                  aktuelle året.
                </p>
              </div>
            </div>
            <Link href="/verstinger/utregning">
              <button className="flex border border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-4 py-2 rounded-lg transition">
                {" "}
                <ArrowRight /> tilbake til toppen
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default utregningPage;
