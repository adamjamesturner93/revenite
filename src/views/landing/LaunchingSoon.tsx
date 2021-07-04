import React from 'react';
import { Launch } from '../../components';

export const LaunchingSoon = () => (
  <section className="move-up-15vh w-full bg-purple-600 section-2 flex flex-col h-screen angle">
    <section className="container w-full mx-auto flex justify-around flex-grow align-middle">
      <article className="flex flex-col justify-center">
        <h2 className="text-3xl text-gray-100 p-6 font-bold">Launching Soon!</h2>
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
      </article>
      <article className="flex flex-col justify-center">
        <Launch />
      </article>
    </section>
  </section>
);
