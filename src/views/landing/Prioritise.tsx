import React from 'react';
import { Choice, GraphicWrapper, SectionWrapper, TextWrapper } from '../../components';

export const HelpingYouPrioritise = () => (
  <section className="move-up-15vh w-full bg-purple-600 section-4 flex flex-col min-h-screen py-40 md:py-30 lg:py-0">
    <SectionWrapper>
      <TextWrapper>
        <h2 className="text-3xl text-gray-100 p-6 font-bold">Helping you Prioritise!</h2>
        <p className="text-gray-100 p-6">
          Revenite isn’t just a fitness tracking up, but is here to help you understand what works
          for your body. Do you need to do more cardio? Or maybe you’re working far too hard?
          Revenite is here for you.
        </p>
        <p className="text-gray-100 p-6">
          Whether you choose to synchronise other apps or wearables, or manually input your
          activity, Revenite will help you to see trends in your exercise with easy to read data
          displays, so you know what’s best for your exercise.
        </p>
      </TextWrapper>
      <GraphicWrapper>
        <Choice />
      </GraphicWrapper>
    </SectionWrapper>
  </section>
);
