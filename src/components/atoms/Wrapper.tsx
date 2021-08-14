import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { ButtonLink } from '.';

export const GraphicWrapper: React.FC = ({ children }) => (
  <aside className="hidden md:flex flex-col justify-center items-center w-1/2 lg:w-1/2 py-12">
    {children}
  </aside>
);

export const TextWrapper: React.FC = ({ children }) => (
  <article className="flex flex-col justify-center w-full text-center lg:w-1/2">{children}</article>
);
export const TextWrapperReverse: React.FC = ({ children }) => (
  <article className="flex flex-col justify-center items-end w-full text-center lg:w-1/2">
    {children}
  </article>
);

export const SectionWrapper: React.FC = ({ children }) => (
  <section className="container w-full mx-auto flex flex-col lg:flex-row justify-center lg:justify-around flex-grow items-center">
    {children}
  </section>
);

export const PageWrapper: React.FC<{
  title?: string;
  back?: string;
  right?: React.ReactNode;
}> = ({ title, back, right, children }) => (
  <div className="gb-gray-50 flex flex-grow ">
    <div className="flex flex-col flex-grow items-center">
      <div className="max-w-full w-full md:w-540 lg:my-14">
        <div className="bg-white py-4 px-4 shadow-form rounded">
          <div className="grid grid-cols-5">
            <div className="flex items-center justify-start">
              {back && (
                <ButtonLink href={back}>
                  <FaArrowLeft />
                </ButtonLink>
              )}
            </div>
            <div className="col-span-3 flex items-center justify-center">
              {title && <h1 className="text-3xl">{title}</h1>}
            </div>
            <div className="flex items-center justify-end">{right}</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  </div>
);
