import React from 'react';
import { ImperialLogo, ScarFreeLogo } from '../../components';

export const Partnerships = () => (
  <section
    id="partnerships"
    className="move-up-15vh w-full bg-gray-100 section-5 flex flex-col h-screen angle"
  >
    <section className="container w-full mx-auto flex flex-col justify-center flex-grow align-middle">
      <article className="flex flex-row-reverse px-12">
        <h2 className="text-3xl text-gray-700 p-6 font-bold">Research Partnerships</h2>
      </article>
      <article className="flex flex-col md:flex-row p-6">
        <article className="flex flex-col p-6 justify-center">
          <a
            href="https://scarfree.org.uk/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <ImperialLogo style={{ height: 'auto', width: '35vw' }} />
          </a>
          <p className="text-gray-700 py-4 text-center">
            This research is hosted and supported by Imperial College London - the Center for Injury
            Studies..
          </p>
        </article>
        <article className="flex flex-col p-6 justify-center">
          <a
            href="https://scarfree.org.uk/"
            target="_blank"
            referrerPolicy="no-referrer"
            rel="noreferrer"
          >
            <ScarFreeLogo style={{ height: 'auto', width: '35vw' }} />
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
