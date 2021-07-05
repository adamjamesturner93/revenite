import React from 'react';
import { ImperialLogo, ScarFreeLogo, TextWrapper } from '../../components';

export const Partnerships = () => (
  <section
    id="partnerships"
    className="move-up-15vh w-full bg-gray-100 section-5 flex flex-col min-h-screen py-40 md:py-30 lg:py-0"
  >
    <section className="container w-full mx-auto flex flex-col justify-center flex-grow align-middle lg:items-end">
      <TextWrapper>
        <h2 className="text-3xl text-gray-700 p-6 font-bold">Research Partnerships</h2>
      </TextWrapper>
      <article className="flex flex-col lg:flex-row p-6 items-center">
        <article className="flex flex-col w-full md:w-2/3 lg:w-1/2 p-6 justify-center ">
          <a
            href="https://www.imperial.ac.uk/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            aria-label="Imperial College London"
          >
            <ImperialLogo />
          </a>
          <p className="text-gray-700 py-4 text-center">
            Revenite is being developed by researchers at Imperial College London, in conjunction
            with the Centre for Blast Injury Studies Amputee Advisory Board.
          </p>
        </article>
        <article className="flex flex-col w-full md:w-2/3 lg:w-1/2 p-6 justify-center">
          <a
            href="https://scarfree.org.uk/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
            aria-label="The Scar Free Foundation"
          >
            <ScarFreeLogo />
          </a>
          <p className="text-gray-700 py-4 text-center">
            This research is funded by The Scar Free Foundation. The Scar Free Foundation is the
            only medical research charity focused on scarring with the mission to achieve scar free
            healing within a generation.
          </p>
        </article>
      </article>
    </section>
  </section>
);
