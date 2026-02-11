export default function LWC({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      className={className}
      fill="none"
    >
      <path
        d="M7.5 7.2c1.1-2 3.2-3.2 5.6-3.2 2.4 0 4.6 1.4 5.6 3.4 1.6.3 2.8 1.7 2.8 3.5 0 2-1.6 3.6-3.6 3.6H8.2C5.9 14.5 4 12.6 4 10.3c0-1.9 1.3-3.5 3.1-4.1Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.2 18.5h7.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M9.2 16.5h5.6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
