import type { SVGProps } from 'react';

export function FolioFlowLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="currentColor"
      {...props}
    >
      <path d="M50 25 Q25 25 25 50 L25 150 Q25 175 50 175 L150 175 Q175 175 175 150 L175 50 Q175 25 150 25 Z M50 50 L150 50 L150 75 L75 75 L75 150 L50 150 Z" />
    </svg>
  );
}
