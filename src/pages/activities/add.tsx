import React from 'react';
import { Input } from '../../components';

const AddActivity: React.FC = () => {
  const onChange = () => {
    return;
  };

  return (
    <div className="gb-gray-50 flex flex-grow ">
      <div className="flex flex-col flex-grow items-center">
        <div className="max-w-full sm:w-540 mt-14">
          <div className="bg-white py-14 px-16 shadow-form rounded">
            <h1 className="text-2xl">Add Activity</h1>
            <form>
              <section className="mt-3">
                <label className="text-sm" htmlFor="title">
                  Title
                </label>
                <Input onChange={onChange} name="title" />
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="date">
                  Date
                </label>
                <Input onChange={onChange} type="datetime-local" name="date" />
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="duration">
                  Duration
                </label>
                <Input onChange={onChange} type="number" name="duration" />
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="distance">
                  Distance
                </label>
                <Input onChange={onChange} type="number" name="distance" />
              </section>
              <section className="mt-3">
                <label className="text-sm">Workout type</label>
                <section className="mt-3 flex flex-col sm:flex-row sm:justify-around ">
                  <label className="text-sm">
                    <input
                      className="mr-2"
                      type="checkbox"
                      onChange={onChange}
                      name="type"
                      title="Strength"
                    />
                    Strength
                  </label>
                  <label className="text-sm">
                    <input className="mr-2" type="checkbox" onChange={onChange} name="type" />
                    Flexibility
                  </label>
                  <label className="text-sm">
                    <input className="mr-2" type="checkbox" onChange={onChange} name="type" />
                    Cardio
                  </label>
                </section>
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="exertion">
                  Perceived Exertion
                </label>
                <Input onChange={onChange} type="range" min="1" max="10" step="1" name="exertion" />
              </section>
              <section className="mt-3">
                <label className="text-sm" htmlFor="body">
                  How is your body feeling?
                </label>
                <Input onChange={onChange} type="range" min="1" max="10" step="1" name="body" />
              </section>
              <button
                className="text-white w-full mt-6 bg-purple-600 p-3 rounded"
                // onClick={forgotPassword}
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddActivity;
