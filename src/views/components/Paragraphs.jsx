// VIEW: render daftar paragraf
export default function Paragraphs({ items, className = "" }) {
  return items.map((p, i) => (
    <p key={i} className={className}>
      {p}
    </p>
  ));
}
