function GoalColumn({ label, items }) {
  return (
    <div className="p-5 bg-panel">
      <div className="tag text-acc mb-3">{label}</div>
      <ul className="space-y-1.5 text-sm list-none p-0">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero({ hero, goalMap }) {
  return (
    <header className="grid lg:grid-cols-12 gap-8 lg:gap-12 px-5 lg:px-12 items-center min-h-[calc(100vh-3rem)]">
      <div className="lg:col-span-7">
        <div className="tag text-acc mb-5">{hero.kicker}</div>
        <h1 className="hd text-6xl sm:text-7xl xl:text-8xl">
          {hero.titleTop}
          <br />
          {hero.titleBottom}{" "}
          <span className="bg-accbg text-black px-2">{hero.titleAccent}</span>
        </h1>
        <p className="mt-8 text-lg sm:text-xl leading-relaxed max-w-2xl">
          {hero.intro}
        </p>
        <a
          href="#awal"
          className="inline-block mt-8 bg-accbg text-black tag px-5 py-3 font-semibold"
        >
          {hero.cta} →
        </a>
      </div>

      <div className="lg:col-span-5">
        <div className="panel">
          <div className="border-b border-line px-4 py-2 tag">
            {goalMap.title}
          </div>
          <div className="grid grid-cols-2 gap-px bg-line">
            <GoalColumn {...goalMap.ot} />
            <GoalColumn {...goalMap.it} />
          </div>
          <div className="px-4 py-3 tag text-dim border-t border-line text-center">
            ↔ {goalMap.footer}
          </div>
        </div>
      </div>
    </header>
  );
}
