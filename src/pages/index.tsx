import React from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks';
import {
  Icon,
  Banner,
  Goals,
  GetInvolved,
  Launch,
  Choice,
  ImperialLogo,
  ScarFreeLogo,
} from '../components/';
import { Link as ScrollLink } from 'react-scroll';

const Home: React.FC = () => {
  const { user, signOut } = useAuth();

  return (
    <React.Fragment>
      <header className="w-full bg-gray-700 flex flex-col h-screen">
        <nav className="container mx-auto w-full flex items-center justify-between py-6">
          <a>
            <Icon />
          </a>
          <ul className="flex">
            <li className="inline-block text-gray-100 no-underline hover:underline text-center h-10 p-2 md:h-auto md:p-4">
              <ScrollLink to="get-involved" smooth={true} duration={500}>
                Get Involved
              </ScrollLink>
            </li>
            <li className="inline-block text-gray-100 no-underline hover:underline text-center h-10 p-2 md:h-auto md:p-4">
              <ScrollLink to="team" smooth={true} duration={500}>
                Meet the Team
              </ScrollLink>
            </li>
            <li className="inline-block text-gray-100 no-underline hover:underline text-center h-10 p-2 md:h-auto md:p-4">
              <ScrollLink to="partnerships" smooth={true} duration={500}>
                Research Partnerships
              </ScrollLink>
            </li>
          </ul>

          <div className="flex justify-end content-center">
            <a
              className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:underline text-center h-10 p-2 md:h-auto md:p-4"
              data-tippy-content="@twitter_handle"
              href="https://twitter.com/reveniterehab"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="fill-current h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
              </svg>
            </a>
            {/* {user ? (
              <Link href="/">
                <a
                  onClick={signOut}
                  className="inline-block text-purple-600 no-underline hover:text-indigo-800 hover:underline text-center h-10 p-2 md:h-auto md:p-4"
                >
                  Sign out
                </a>
              </Link>
            ) : (
              <Link href="/sign-in">
                <a className="inline-block text-purple-600 no-underline hover:text-indigo-800 hover:underline text-center h-10 p-2 md:h-auto md:p-4">
                  Sign in
                </a>
              </Link>
            )} */}
          </div>
        </nav>

        <section className="container w-full mx-auto flex justify-around flex-grow align-middle">
          <article className="flex flex-col justify-center">
            <Banner />
            <h2 className="2xl text-gray-100 py-4">Helping you reach your fitness goals</h2>
          </article>
          <article className="flex flex-col justify-center">
            <Goals />
          </article>
        </section>
      </header>

      <section
        id="get-involved"
        className="move-up-15vh w-full bg-gray-100 section-1 flex flex-col h-screen angle"
      >
        <section className="container w-full mx-auto flex justify-around flex-grow align-middle">
          <article className="flex flex-col justify-center">
            <GetInvolved />
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

      <section className="move-up-15vh w-full bg-purple-600 section-2 flex flex-col h-screen angle">
        <section className="container w-full mx-auto flex justify-around flex-grow align-middle">
          <article className="flex flex-col justify-center">
            <h2 className="text-3xl text-gray-100 p-6 font-bold">Launching Soon!</h2>
            <p className="text-gray-100 p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
              praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem
              natus. Deleniti quam et nisi natus vero totam.
            </p>
            <p className="text-gray-100 p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
              praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem
              natus. Deleniti quam et nisi natus vero totam.
            </p>
            <p className="text-gray-100 p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
              praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem
              natus. Deleniti quam et nisi natus vero totam.
            </p>
          </article>
          <article className="flex flex-col justify-center">
            <Launch />
          </article>
        </section>
      </section>

      <section
        id="team"
        className="move-up-15vh w-full bg-gray-100 section-3 flex flex-col h-screen angle"
      >
        <section className="container w-full mx-auto flex justify-around flex-grow align-middle">
          <article className="flex flex-col justify-center">
            <h2 className="text-3xl text-gray-700 p-6 font-bold">Meet the Team!</h2>
          </article>
        </section>
      </section>

      <section className="move-up-15vh w-full bg-purple-600 section-4 flex flex-col h-screen">
        <section className="container w-full mx-auto flex justify-around flex-grow align-middle">
          <article className="flex flex-col justify-center">
            <h2 className="text-3xl text-gray-100 p-6 font-bold">Helping you Prioritise!</h2>
            <p className="text-gray-100 p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
              praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem
              natus. Deleniti quam et nisi natus vero totam.
            </p>
            <p className="text-gray-100 p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
              praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem
              natus. Deleniti quam et nisi natus vero totam.
            </p>
            <p className="text-gray-100 p-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, corporis illum
              praesentium illo sequi, optio adipisci ratione iste deserunt odio, amet voluptatem
              natus. Deleniti quam et nisi natus vero totam.
            </p>
          </article>
          <article className="flex flex-col justify-center">
            <Choice />
          </article>
        </section>
      </section>

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
                This research is hosted and supported by Imperial College London - the Center for
                Injury Studies..
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
                only medical research charity focused on scarring with the mission to achieve scar
                free healing within a generation.
              </p>
            </article>
          </article>
        </section>
      </section>

      <footer className="move-up-15vh w-full flex flex-col align-middle justify-center mx-auto p-6 pt-16 pb-6 text-sm text-center md:text-left fade-in bg-gray-700">
        <section className="container w-full mx-auto flex flex-col align-middle justify-center flex-grow">
          <a className="text-gray-100 no-underline hover:no-underline" href="#">
            &copy; Revenite 2021
          </a>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Home;
