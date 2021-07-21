import React from 'react';
import { SectionWrapper, TextWrapper } from '../../components';
import { FaResearchgate, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';
import classnames from 'classnames';

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  img: string;
  linkedIn?: string;
  twitter?: string;
  researchGate?: string;
  website?: string;
  offset?: boolean;
};

const PersonCard: React.FC<TeamMemberProps> = ({
  img,
  name,
  description,
  role,
  linkedIn,
  twitter,
  researchGate,
  website,
  offset = false,
}) => (
  <article
    className={classnames('flex flex-col w-full p-6 items-center col-span-2', {
      'lg:col-start-2': offset,
    })}
  >
    <img src={img} alt={name} className="rounded-full w-2/3 md:w-1/2" />
    <h3 className="text-xl font-bold pt-2">{name}</h3>
    <h4 className="font-bold">{role}</h4>
    <p className="text-gray-700 py-2">{description}</p>
    <aside className="flex w-1/2 justify-around">
      {researchGate && (
        <a
          href={researchGate}
          target="_blank"
          aria-label={`Find ${name} on ResearchGate`}
          rel="noreferrer"
        >
          <FaResearchgate style={{ fill: '#40BA9B' }} className="w-8 h-8" />
        </a>
      )}
      {twitter && (
        <a href={twitter} target="_blank" aria-label={`Find ${name} on Twitter`} rel="noreferrer">
          <FaTwitter style={{ fill: '#1DA1F2' }} className="w-8 h-8" />
        </a>
      )}
      {linkedIn && (
        <a href={linkedIn} target="_blank" aria-label={`Find ${name} on LinkedIn`} rel="noreferrer">
          <FaLinkedin style={{ fill: '#0a66C2' }} className="w-8 h-8" />
        </a>
      )}
      {website && (
        <a href={website} target="_blank" aria-label={`${name}'s Website`} rel="noreferrer">
          <SiWebmoney style={{ fill: '#0a66C2' }} className="w-8 h-8" />
        </a>
      )}
    </aside>
  </article>
);
export const MeetTheTeam = () => (
  <section
    id="team"
    className="move-up-15vh w-full bg-gray-100 section-3 flex flex-col min-h-screen py-40"
  >
    <SectionWrapper>
      <div className="flex flex-col justify-center text-center items-center">
        <TextWrapper>
          <h2 className="text-3xl text-gray-700 p-6 font-bold">Meet the Team</h2>
        </TextWrapper>
        <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          <PersonCard
            img="/Shruti.png"
            name="Dr. Shruti Turner"
            role="Co-Investigator (Researcher)"
            description="Shruti recently completed her PhD at Imperial College London, using a user-centred design approach to create software for clinicians to fit and monitor prosthetic sockets. She contributes to the app development and testing and is passionate about working with people, technology and data, to improve quality of life."
            linkedIn="https://www.linkedin.com/in/shrutiturner/"
            twitter="https://twitter.com/ShrutiTurner"
            researchGate="https://www.researchgate.net/profile/Shruti-Turner"
          />
          <PersonCard
            img="/Alison.png"
            name="Prof. Alison McGregor"
            role="Principal Investigator"
            description="Alison is a Professor of Musculoskeletal Biodynamics at Imperial College London. Her research focuses on the musculoskeletal system with respect to mechanisms of injury; effects of injury on function and rehabilitation. She has a specific interest in the spine and spinal biomechanics, elite performance, long term amputee health and the development and translation of new management approaches and innovations into the clinical environment. She is an associate director for the Centre for Blast Injury Studies where she leads the rehabilitation theme."
            website="https://www.imperial.ac.uk/people/a.mcgregor"
          />
          <PersonCard
            img="/Adam.jpeg"
            name="Adam Turner"
            role="Co-Investigator (Software Developer)"
            description="Adam is a Senior Software Engineer at Qualio, specialising in creating secure software in highly regulated environments. He has worked and consulted in Medical Technology companies as well as global Financial Institutions."
            linkedIn="https://www.linkedin.com/in/adamjturner93/"
          />
          <PersonCard
            img="/David.png"
            name="Dr. David Henson"
            role="Co-Investigator (User Representative)"
            description="Dave was a Captain in the British Army, losing his legs to an IED blast in February 2011.  Dave has competed at the Invictus Games, World Championships, and the Paralympic Games; winning medals in all competitions, and has a PhD in Amputee Biomechanics from Imperial College London."
            twitter="https://twitter.com/leglessbdh"
            offset
          />
          <PersonCard
            img="/Jon.png"
            name="Jon White"
            role="Co-Investigator (User Representative)"
            description=""
            twitter="https://twitter.com/jonwhite50"
            website="www.thewhitehousefuture.co.uk"
          />
        </section>
      </div>
    </SectionWrapper>
  </section>
);
