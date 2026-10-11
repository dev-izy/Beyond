import { Plus } from './Icons';

/** Accessible accordion built on <details>/<summary> — keyboard friendly with no JS. */
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q} className="faq__item reveal">
          <summary>
            <span>{f.q}</span>
            <Plus size={16} />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
