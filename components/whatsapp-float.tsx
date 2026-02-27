export function WhatsAppFloat({ phone }: { phone: string }) {
  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-green-500 px-5 py-3 text-sm font-semibold text-white shadow-luxe transition hover:bg-green-600"
    >
      WhatsApp Us
    </a>
  );
}
