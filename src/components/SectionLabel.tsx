type Props = { children: string; center?: boolean };

export default function SectionLabel({ children, center }: Props) {
  return <p className={`eyebrow ${center ? 'eyebrow--center' : ''}`}>{children}</p>;
}
