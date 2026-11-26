// VIEW: kartu perjalanan kerja (scroll horizontal)
export default function JourneyCards({ items }) {
  return (
    <>
      <div className="flex gap-px overflow-x-auto snap-x snap-mandatory pb-3">
        {items.map((j, i) => (
          <div key={j.place} className="panel snap-start shrink-0 w-[19rem] p-6 flex flex-col">
            <div className="font-mono text-5xl text-dim opacity-40">0{i + 1}</div>
            <div className="tag text-acc mt-6">{j.place}</div>
            <h3 className="hd text-2xl mt-1">{j.role}</h3>
            <p className="text-dim text-[.95rem] mt-3 leading-relaxed">{j.desc}</p>
          </div>
        ))}
      </div>
      <div className="tag text-dim mt-2 mb-10">Geser ke samping →</div>
    </>
  );
}
