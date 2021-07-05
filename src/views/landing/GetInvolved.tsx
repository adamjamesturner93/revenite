import React from 'react';
import { Contact, GraphicWrapper, SectionWrapper, TextWrapper } from '../../components';

export const GetInvolved = () => (
  <section
    id="get-involved"
    className="move-up-15vh w-full bg-gray-100 section-1 flex flex-col h-screen px-6"
  >
    <SectionWrapper>
      <GraphicWrapper>
        <Contact />
      </GraphicWrapper>
      <TextWrapper>
        <h2 className="text-3xl text-gray-700 p-6 font-bold">Get Involved</h2>
        <p className="text-xl text-gray-700 p-6">
          If you’re interested in becoming a test user, please contact{' '}
          <a
            className="inline-block text-purple-600 no-underline hover:text-indigo-800  hover:underline text-center"
            href="mailto:s.turner17@imperial.ac.uk"
            rel="noreferrer"
          >
            Shruti
          </a>{' '}
          or message us on{' '}
          <a
            className="inline-block text-purple-600 no-underline hover:text-indigo-800 hover:underline text-center"
            data-tippy-content="@twitter_handle"
            href="https://twitter.com/reveniterehab"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </p>
      </TextWrapper>
    </SectionWrapper>
  </section>
);
