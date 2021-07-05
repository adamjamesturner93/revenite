import React from 'react';
import { GraphicWrapper, Launch, SectionWrapper, TextWrapper } from '../../components';

export const LaunchingSoon = () => (
  <section className="move-up-15vh w-full bg-purple-600 section-4 flex flex-col min-h-screen py-40 md:py-30 lg:py-0">
    <SectionWrapper>
      <TextWrapper>
        <h2 className="text-3xl text-gray-100 p-6 font-bold">Launching Soon!</h2>
        <p className="text-gray-100 p-6">
          Your central place for your fitness tracking, scar management and physical health
          monitoring.
        </p>
        <p className="text-gray-100 p-6">
          We’re putting the finishing touches on the first version of the app and just going through
          the last few bits of approvals before we will be ready to launch our app.
        </p>
        <p className="text-gray-100 p-6">
          We’ll continually be adding functionality and updating the app, based on feedback from our
          pilot study. For sneak previews, up to date information or if you’d like to be involved
          please contact{' '}
          <a
            className="inline-block text-gray-900 no-underline hover:text-gray-700 hover:underline text-center"
            href="mailto:s.turner17@imperial.ac.uk"
            rel="noreferrer"
          >
            Shruti
          </a>{' '}
          or follow us on{' '}
          <a
            className="inline-block text-gray-900 no-underline hover:text-gray-700 hover:underline text-center"
            data-tippy-content="@twitter_handle"
            href="https://twitter.com/reveniterehab"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          .
        </p>
      </TextWrapper>
      <GraphicWrapper>
        <Launch />
      </GraphicWrapper>
    </SectionWrapper>
  </section>
);
