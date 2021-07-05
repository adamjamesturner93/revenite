import React from 'react';
import { SectionWrapper, TextWrapper } from '../../components';
import { FaResearchgate, FaTwitter, FaLinkedin } from 'react-icons/fa';

type TeamMemberProps = {
  name: string;
  role: string;
  description: string;
  img: string;
  linkedIn?: string;
  twitter?: string;
  researchGate?: string;
};

const PersonCard: React.FC<TeamMemberProps> = ({
  img,
  name,
  description,
  role,
  linkedIn,
  twitter,
  researchGate,
}) => (
  <article className="flex flex-col w-full p-6 items-center">
    <img src={img} alt={name} className="rounded-full w-2/3 md:w-1/2" />
    <h3 className="text-xl font-bold pt-2">{name}</h3>
    <h4 className="font-bold">{role}</h4>
    <p className="text-gray-700 py-2">{description}</p>
    <aside className="flex w-1/2 justify-around">
      {researchGate && (
        <a href={researchGate}>
          <FaResearchgate style={{ fill: '#40BA9B' }} className="w-8 h-8" />
        </a>
      )}
      {twitter && (
        <a href={twitter}>
          <FaTwitter style={{ fill: '#1DA1F2' }} className="w-8 h-8" />
        </a>
      )}
      {linkedIn && (
        <a href={linkedIn}>
          <FaLinkedin style={{ fill: '#0a66C2' }} className="w-8 h-8" />
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
      <div className="flex flex-col justify-center text-center lg:items-end">
        <TextWrapper>
          <h2 className="text-3xl text-gray-700 p-6 font-bold">Meet the Team</h2>
        </TextWrapper>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <PersonCard
            img="/Shruti.png"
            name="Shruti Turner"
            role="Researcher"
            description="Shruti recently completed her PhD at Imperial College London, using a user-centred design approach to create software for clinicians to fit and monitor prosthetic sockets. She contributes to the app development and testing and is passionate about working with people, technology and data, to improve quality of life."
            linkedIn="https://www.linkedin.com/in/shrutiturner/"
            twitter="https://twitter.com/ShrutiTurner"
            researchGate="https://www.researchgate.net/profile/Shruti-Turner"
          />
          <PersonCard
            img="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            name="Prof. Alison McGregor"
            role="Principal Investigator"
            description=""
          />
          <PersonCard
            img="/Adam.jpeg"
            name="Adam Turner"
            role="Software Developer"
            description="Adam is a Senior Software Engineer at Qualio, specialising in creating secure software in highly regulated environments. He has worked and consulted in Medical Technology companies as well as global Financial Institutions."
            linkedIn="https://www.linkedin.com/in/adamjturner93/"
          />
          <PersonCard
            img="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            name="Dr. David Henson"
            role="User Representatives"
            description=""
          />
          <PersonCard
            img="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            name="Jon White"
            role="User Representatives"
            description=""
          />
        </section>
      </div>
    </SectionWrapper>
  </section>
);
