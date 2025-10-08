import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

function TilTakKort({ tiltak }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={tiltak.imageUrl}
          alt={tiltak.title}
          fill
          sizes="300px"
          className="object-cover kenburns-top-right"
        />
      </div>
      <div className="p-6 animate-[color-change-4x_6s_linear_infinite_alternate_both]">
        {/* Tittel */}
        <h3 className="text-xl font-bold text-white mb-3">{tiltak.title}</h3>

        {/* Kort beskrivelse */}
        <p className="text-white mb-4 line-clamp-3">{tiltak.beskrivelse}</p>

        {/* lenke til detaljside */}
        <Link
          href={`/tiltak/${tiltak.id}`}
          className="inline-flex items-center gap-2 text-white font-semibold hover:text-green-700 transition"
        >
          Les mer
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

export default TilTakKort;
