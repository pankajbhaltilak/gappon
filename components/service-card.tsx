interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="glass-panel p-7">
      <div className="text-2xl" aria-hidden="true">{icon}</div>
      <h3 className="mt-4 font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
      <button className="mt-6 text-xs uppercase tracking-[0.18em] text-[#c2b7a2]">Read More →</button>
    </article>
  );
}
