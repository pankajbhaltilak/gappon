export function WhatsAppFloat({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-[#0f3b24] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-2xl transition hover:bg-[#145832]"
    >
      WhatsApp
    </a>
  );
}
