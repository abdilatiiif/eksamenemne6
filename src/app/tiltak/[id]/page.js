import { tiltak } from "@/data/tiltak";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

function TiltakPageDetalje({ params }) {
  const tiltakDetalje = tiltak.find((t) => t.id === params.id);
  console.log("side funnet:", tiltakDetalje);

  !tiltakDetalje && notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      {tiltakDetalje.id}
      <Link
        href="/tiltak"
        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold mb-8"
      >
        <ArrowLeft size={20} />
        Tilbake til alle tiltak
      </Link>
    </div>
  );
}

export default TiltakPageDetalje;
