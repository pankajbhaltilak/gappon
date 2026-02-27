interface MaterialCardProps {
  name: string;
  description: string;
}

export function MaterialCard({ name, description }: MaterialCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#111113]">
      <div className="h-44 bg-gradient-to-br from-[#c2b7a2]/45 via-[#252527] to-[#0f0f11]" />
      <div className="p-6">
        <h3 className="font-serif text-3xl text-white" style={{ fontFamily: 'var(--font-cormorant), serif' }}>{name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
      </div>
    </article>
  );
}
