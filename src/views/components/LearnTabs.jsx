// VIEW: tab tahap belajar + panel kode
export default function LearnTabs({ stages, activeIndex, active, onSelect }) {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
        {stages.map((s, i) => (
          <button
            key={s.key}
            onClick={() => onSelect(i)}
            className={
              "text-left px-4 py-3 transition-colors " +
              (i === activeIndex ? "bg-accbg text-black" : "bg-panel text-ink")
            }
          >
            <div className="tag">{s.tab}</div>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-px bg-line">
        <div className="p-6 lg:p-10 story bg-panel">
          <div className={`tag mb-3 ${active.statusClass}`}>
            ● {active.status}
          </div>
          <h3 className="hd text-3xl sm:text-4xl mb-5">{active.title}</h3>
          {active.paragraphs.map((p, i) => (
            <p key={i} className="text-dim !text-[1.02rem] !leading-[1.85]">
              {p}
            </p>
          ))}
        </div>
        <pre className="p-6 lg:p-10 overflow-x-auto font-mono text-[.8rem] leading-relaxed m-0 bg-base">
          <code>{active.code}</code>
        </pre>
      </div>
    </div>
  );
}
