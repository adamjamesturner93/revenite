import React from 'react';
// import Link from 'next/link';
// import { useAuth } from '../hooks';
import { Icon, Banner, Goals } from '../components/';
import { Link as ScrollLink } from 'react-scroll';
import {
  HelpingYouPrioritise,
  Partnerships,
  LaunchingSoon,
  MeetTheTeam,
  GetInvolved,
} from '../views/landing';

const Home: React.FC = () => {
  // const { user, signOut } = useAuth();

  // TODO CREATE A TERMS, PRIVACY AND SECURITY PAGE WITH RAIN CLOUD AND UNDER CONSTRUCTION.
  return (
    <React.Fragment>
      <header className="w-full bg-gray-700 flex flex-col h-screen">
        <nav className="container mx-auto w-full flex items-center justify-between p-6">
          <a href="/" aria-label="Revenite">
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
              aria-label="Follow us on Twitter"
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

        <section className="container w-full mx-auto flex flex-col lg:flex-row justify-center lg:justify-around flex-grow items-center">
          <article className="flex flex-col items-center justify-center w-1/2 lg:w-1/3">
            <Banner />
            <h2 className="text-2xl text-center text-gray-100 py-4">
              Helping you reach your fitness goals
            </h2>
          </article>
          <article className="hidden md:flex flex-col justify-center items-center w-2/3 lg:w-1/2">
            <Goals />
          </article>
        </section>
      </header>

      <GetInvolved />
      <LaunchingSoon />
      <MeetTheTeam />
      <HelpingYouPrioritise />
      <Partnerships />

      <footer className="move-up-15vh w-full flex flex-col align-middle justify-center mx-auto p-6 pt-16 pb-6 text-sm text-center md:text-left fade-in bg-gray-700">
        {/*<section className="container w-full mx-auto flex align-middle justify-center p-6">
          <a className="text-xl text-gray-100 no-underline hover:no-underline px-6" href="#">
            Privacy
          </a>
          <a className="text-xl text-gray-100 no-underline hover:no-underline px-6" href="#">
            Security
          </a>
          <a className="text-xl text-gray-100 no-underline hover:no-underline px-6" href="#">
            GDPR
          </a>
        </section> */}
        <section className="container w-full mx-auto flex flex-col align-middle justify-center p-6">
          <a className="text-xl text-gray-100 text-center no-underline hover:no-underline" href="#">
            &copy; Revenite 2021 - AdamJamesTurner93
          </a>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default Home;
