// VIEW: kartu rencana
export default function PlanGrid({ items }) {
  return (
    <div className="grid md:grid-cols-3 gap-3 my-8">
      {items.map((r) => (
        <div key={r.title} className="panel p-5">
          <div className={`tag mb-2 ${r.statusClass}`}>● {r.status}</div>
          <h3 className="hd text-xl mb-2">{r.title}</h3>
          <p className="text-dim text-[.85rem] leading-relaxed">{r.text}</p>
        </div>
      ))}
    </div>
  );
}
