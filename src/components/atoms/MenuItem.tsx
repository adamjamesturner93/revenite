import React from 'react';
import Link from 'next/link';

export const MenuItem: React.FC<{
  href: string;
  label: string;
  icon?: React.ReactNode;
}> = ({ href, label, icon }) => (
  <li className="p-3">
    <Link href={href}>
      <a className="flex items-center">
        {icon}
        {label}
      </a>
    </Link>
  </li>
);
