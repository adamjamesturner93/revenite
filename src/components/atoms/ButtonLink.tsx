import React from 'react';
import Link from 'next/link';

export const ButtonLink: React.FC<{ href: string }> = ({ href, children }) => (
  <Link href={href}>
    <a className="m-4 flex border border-gray-700 hover:border-purple-600 hover:text-purple-600 p-4 rounded-full items-center justify-center">
      {children}
    </a>
  </Link>
);
