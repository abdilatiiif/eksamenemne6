import { Heart, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Leaf size={24} />
              <h3 className="text-xl font-bold">Klimakampen</h3>
            </div>
            <p className="text-green-100">
              En nettside dedikert til å informere om klimaendringer og hvordan
              vi alle kan bidra til en grønnere fremtid.⛳️
            </p>
          </div>

          {/* Lenker til div sider */}
          <div>
            <h3 className="text-xl font-bold mb-3">Ressurser</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <a
                  href="https://www.klimaorginiasjonene.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Klima organisasjonene
                </a>
              </li>
              <li>
                <a
                  href="https://www.miljodirektoratet.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Miljødirektoratet
                </a>
              </li>
              <li>
                <a
                  href="https://www.fn.no/om-fn/fns-baerekraftsmaal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  FNs bærekraftsmål
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-3">Kontakt</h3>
            <p className="text-green-100">contact@klima.verden.no 📧</p>
            <p className="text-green-100">+47 123 45 678 📱</p>
            <p className="text-green-100">Oasis, Vegapunk 📍</p>
          </div>
        </div>

        {/* Copyright  */}
        <div className="border-t border-green-600 pt-6 text-center text-green-100">
          <p className="flex items-center justify-center gap-2">
            Laget med{" "}
            <Heart size={16} className="text-red-400" fill="currentColor" /> for
            en grønnere fremtid
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Klimakampen. Latif Hassan. Alle
            rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
