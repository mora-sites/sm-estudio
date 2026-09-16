import MapCard from "./MapCard";

export default function LocationCard() {
  return (
    <div className="rounded-lg border border-sm-cream-dark p-8">
      <h3 className="m-0 mb-2 font-display text-2xl font-extrabold text-sm-ink">Encontra-nos</h3>
      <p className="m-0 mb-6 text-sm text-sm-ink">Praceta Jaime Cortesão, 116 - Loja 11, Águas Santas, Maia.</p>
      <MapCard />
    </div>
  );
}
