import { tiltak } from "@/data/tiltak";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// henter på forhånd alle mulige id'er
export async function generateStaticParams() {
  return tiltak.map((t) => ({
    id: t.id,
  }));
}

function TiltakPageDetalje({ params }) {
  const tiltakDetalje = tiltak.find((t) => t.id === params.id);
  console.log("side funnet:", tiltakDetalje);

  !tiltakDetalje && notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <Link
        href="/tiltak"
        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8"
      >
        <ArrowLeft size={20} />
        Tilbake til alle tiltak
      </Link>

      {/* selve innholdet  */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={tiltakDetalje.imageUrl}
            alt={tiltakDetalje.title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        {/* tekst*/}
        <div className="p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            {tiltakDetalje.title}
          </h1>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {tiltakDetalje.fullText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TiltakPageDetalje;
