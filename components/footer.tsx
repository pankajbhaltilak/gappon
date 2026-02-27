export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container-pad flex flex-col gap-2 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Gaponn Trends LLP</p>
        <p>Pune, Maharashtra · India</p>
      </div>
    </footer>
  );
}
