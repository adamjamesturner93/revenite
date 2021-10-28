import React from 'react';

export const TabLink: React.FC<{ openTab: number; index: number; onClick: () => void }> = ({
  openTab,
  index,
  onClick,
  children,
}) => (
  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
    <a
      className={
        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
        (openTab === index ? 'text-white bg-purple-600' : 'text-purple-600 bg-white')
      }
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      data-toggle="tab"
      href={`#link${index}`}
      role="tablist"
    >
      {children}
    </a>
  </li>
);

export const Tab: React.FC = ({ children }) => (
  <article className="flex-col block">{children}</article>
);
