export default function ProgramCard({ title, onClick }: { title: string; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick} className="group flex w-full cursor-pointer flex-col gap-4 text-left">
      <div className="aspect-[4/3] overflow-hidden rounded-lg bg-sm-cream-dark" />
      <div className="flex items-center justify-between">
        <h3 className="m-0 font-display text-xl font-bold text-sm-ink">{title}</h3>
        <span className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full border border-sm-cream-dark text-sm-gold transition-transform duration-200 ease-standard group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </button>
  );
}
