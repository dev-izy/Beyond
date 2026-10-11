import type { DivisionStatus } from '../data/content';

const LABEL: Record<DivisionStatus, string> = {
  live: 'Live now',
  expanding: 'Expanding',
  future: 'Future',
};

export default function StatusBadge({ status }: { status: DivisionStatus }) {
  return (
    <span className={`badge badge--${status}`}>
      <span className="badge__dot" />
      {LABEL[status]}
    </span>
  );
}
