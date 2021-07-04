import React from 'react';

export const GraphicWrapper: React.FC = ({ children }) => (
  <article className="hidden md:flex flex-col justify-center items-center w-1/2 lg:w-1/2 py-12">
    {children}
  </article>
);

export const TextWrapper: React.FC = ({ children }) => (
  <article className="flex flex-col justify-center w-full text-center lg:text-left lg:w-1/2">
    {children}
  </article>
);

export const SectionWrapper: React.FC = ({ children }) => (
  <section className="container w-full mx-auto flex flex-col lg:flex-row justify-center lg:justify-around flex-grow items-center">
    {children}
  </section>
);
