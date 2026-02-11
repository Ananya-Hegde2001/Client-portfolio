export default function Apex({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      className={className}
      fill="none"
    >
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" opacity="0.9" />
      <path
        d="M12 6.5L7.8 17.5h2.2l.9-2.4h2.2l.9 2.4h2.2L12 6.5Zm-.4 6.7L12 12l.4 1.2h-.8Z"
        fill="currentColor"
      />
      <path
        d="M14.7 17.5l-3.4-9h1.9l3.4 9h-1.9Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  );
}
