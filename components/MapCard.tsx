const ADDRESS = "Praceta Jaime Cortesão, 116, Águas Santas, Maia, Portugal";
const ADDRESS_QUERY = encodeURIComponent(ADDRESS);

export default function MapCard({ label = "Ver Localização" }: { label?: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-sm-cream-dark">
      <iframe
        src={`https://www.google.com/maps?q=${ADDRESS_QUERY}&output=embed`}
        className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Localização do SM_Estúdio no mapa"
      />
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-3 top-3 rounded-pill bg-white px-4 py-2.5 text-sm font-semibold text-sm-gold-dark no-underline shadow-sm"
      >
        {label}
      </a>
    </div>
  );
}
