// VIEW: pembungkus bagian. Prop `split` = judul di kiri (sticky), isi di kanan.
export default function Section({ id, no, title, split = false, children }) {
  const head = (
    <div
      className={
        split
          ? "flex items-end gap-4 lg:flex-col lg:items-start lg:gap-2 lg:sticky lg:top-20"
          : "flex items-end gap-4 mb-8"
      }
    >
      <span className="tag text-acc">{no}</span>
      <h2 className="hd text-4xl sm:text-5xl">{title}</h2>
    </div>
  );

  return (
    <section id={id} className="px-5 lg:px-12 py-14 border-t border-line">
      {split ? (
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-4 mb-2">{head}</div>
          <div className="lg:col-span-8 story">{children}</div>
        </div>
      ) : (
        <>
          {head}
          {children}
        </>
      )}
    </section>
  );
}
