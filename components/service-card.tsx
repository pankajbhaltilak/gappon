export function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <article className="glass-panel p-7">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-4 font-serif text-3xl text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/65">{description}</p>
    </article>
  );
}
