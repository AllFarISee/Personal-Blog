// VIEW: footer. Tambahkan nama + NIM di sini.
export default function Footer({ left, right }) {
  return (
    <footer className="px-5 lg:px-12 py-6 border-t border-line tag text-dim flex flex-wrap justify-between gap-2">
      <span>{left}</span>
      <span>{right}</span>
    </footer>
  );
}
