// VIEW: grid 4 bidang (mekanikal, elektrikal, utility, informatika)
export default function FieldGrid({ items }) {
  return (
    <div className="grid grid-cols-2 gap-px self-start bg-line">
      {items.map((b) => (
        <div key={b.title} className="p-4 bg-panel">
          <div className="tag text-acc">{b.type}</div>
          <h3 className="hd text-2xl mt-1 mb-2">{b.title}</h3>
          <ul className="space-y-1 text-dim list-none p-0 text-[.82rem]">
            {b.items.map((x) => (
              <li key={x}>— {x}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
