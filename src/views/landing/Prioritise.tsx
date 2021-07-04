import React from 'react';
import { Choice, GraphicWrapper, SectionWrapper, TextWrapper } from '../../components';

export const HelpingYouPrioritise = () => (
  <section className="move-up-15vh w-full bg-purple-600 section-4 flex flex-col min-h-screen py-40 md:py-30 lg:py-0">
    <SectionWrapper>
      <TextWrapper>
        <h2 className="text-3xl text-gray-100 p-6 font-bold">Helping you Prioritise!</h2>
        <p className="text-gray-100 p-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
          praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem natus.
          Deleniti quam et nisi natus vero totam.
        </p>
        <p className="text-gray-100 p-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
          praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem natus.
          Deleniti quam et nisi natus vero totam.
        </p>
        <p className="text-gray-100 p-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
          praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem natus.
          Deleniti quam et nisi natus vero totam.
        </p>
      </TextWrapper>
      <GraphicWrapper>
        <Choice />
      </GraphicWrapper>
    </SectionWrapper>
  </section>
);
