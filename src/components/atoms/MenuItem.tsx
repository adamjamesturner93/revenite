import React from 'react';
import Link from 'next/link';

export const MenuItem: React.FC<{
  href: string;
  label: string;
}> = ({ href, label }) => (
  <li className="p-3">
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </li>
);
