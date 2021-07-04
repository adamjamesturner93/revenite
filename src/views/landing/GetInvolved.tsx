import React from 'react';
import { Contact } from '../../components';

export const GetInvolved = () => (
  <section
    id="get-involved"
    className="move-up-15vh w-full bg-gray-100 section-1 flex flex-col h-screen angle"
  >
    <section className="container w-full mx-auto flex justify-around flex-grow align-middle">
      <article className="flex flex-col justify-center">
        <Contact />
      </article>
      <article className="flex flex-col justify-center">
        <h2 className="text-3xl text-gray-700 p-6 font-bold">Get Involved</h2>
        <p className="text-gray-700 p-6">
          If you’re interested in becoming a test user, please contact Shruti (
          <a
            className="inline-block text-purple-600 no-underline hover:text-indigo-800  hover:underline text-center"
            data-tippy-content="@twitter_handle"
            href="https://twitter.com/reveniterehab"
            target="_blank"
            rel="noreferrer"
          >
            s.turner17@imperial.ac.uk
          </a>
          ) or message us on{' '}
          <a
            className="inline-block text-purple-600 no-underline hover:text-indigo-800 hover:underline text-center"
            data-tippy-content="@twitter_handle"
            href="https://twitter.com/reveniterehab"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          !
        </p>
      </article>
    </section>
  </section>
);
