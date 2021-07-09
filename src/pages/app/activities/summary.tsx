import React from 'react';
import { PageWrapper } from '../../../components';

const Activities: React.FC = () => {
  return (
    <PageWrapper title="Activities Summary">
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <article className="bg-white p-10 shadow-form flex-col">
          <h3 className="text-xl font-bold text-gray-700">This week:</h3>
          <p className="text-gray-500">Cardio: 5 (40%)</p>
          <p className="text-gray-500">Flex: 15 (4%)</p>
          <p className="text-gray-500">Strength: 15 (56%)</p>
        </article>
        <article className="bg-white p-10 shadow-form flex-col">
          <h3 className="text-xl font-bold text-gray-700">This month:</h3>
          <p className="text-gray-500">Cardio: 15 (44%)</p>
          <p className="text-gray-500">Flex: 15 (23%)</p>
          <p className="text-gray-500">Strength: 15 (33%)</p>
        </article>
        <article className="bg-white p-10 shadow-form flex-col">
          <h3 className="text-xl font-bold text-gray-700">All time:</h3>
          <p className="text-gray-500">Cardio: 25 (32%)</p>
          <p className="text-gray-500">Flex: 25 (46%)</p>
          <p className="text-gray-500">Strength: 25 (22%)</p>
        </article>
      </section>
    </PageWrapper>
  );
};

export default Activities;
