// VIEW: bento grid pelajaran
export default function LessonGrid({ items }) {
  return (
    <div className="grid lg:grid-cols-4 gap-px bg-line">
      {items.map((l) => (
        <div
          key={l.title}
          className={"p-6 bg-panel " + (l.wide ? "lg:col-span-2" : "")}
        >
          <h3 className="hd text-2xl text-acc mb-2">{l.title}</h3>
          <p className="text-dim leading-relaxed text-[.95rem]">{l.text}</p>
        </div>
      ))}
    </div>
  );
}
