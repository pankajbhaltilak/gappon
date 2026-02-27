export function MaterialCard({ name, description }: { name: string; description: string }) {
  return (
    <article className="glass-panel p-6">
      <h3 className="font-serif text-3xl text-white">
        {name}
      </h3>
      <p className="mt-3 text-white/70">{description}</p>
    </article>
  );
}
