// VIEW: navigasi atas + progress bar
export default function TopBar({ links, progress }) {
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-base">
      <div className="flex items-center justify-between px-5 lg:px-12 h-14">
        <a href="#top" className="hd text-xl flex items-center gap-2">
          <span className="bg-accbg text-black px-1.5">Alfarisi Azhar</span>
        </a>
        <div className="hidden sm:flex gap-6 tag text-dim">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:text-accbg">
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="h-0.5 bg-accbg" style={{ width: `${progress * 100}%` }} />
    </nav>
  );
}
