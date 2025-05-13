import type { SVGProps } from 'react';

export function ALogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="currentColor"
      {...props}
    >
      {/* Modern 'A' shape */}
      <path d="M50 15 L15 85 H30 L42 55 H58 L70 85 H85 L50 15 Z M45 50 L50 35 L55 50 H45 Z" />
    </svg>
  );
}
