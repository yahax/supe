import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  label: string;
}

export default function CTAButton({ href, label }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-accent text-black px-4 py-2 text-sm font-semibold tracking-tight transition hover:-translate-y-0.5 hover:shadow-subtle"
    >
      {label}
      <span aria-hidden>→</span>
    </Link>
  );
}
