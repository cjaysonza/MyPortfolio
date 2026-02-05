// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#1d212c]">
//       <h2>This is the Main Component</h2>
//     </div>
//   );
// }
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faEnvelope,
  faGraduationCap,
  faBriefcase,
  faChalkboardTeacher,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

/**
 * NOTE:
 * - This page is intentionally a Client Component to avoid hydration/runtime issues
 *   with dynamic inline styles and mapped JSX.
 * - All dynamic values are fully defined and non-null.
 */

const skills: { name: string; value: number }[] = [
  { name: "HTML, Javascript, CSS", value: 90 },
  { name: "NodeJS, ReactJS, NextJS", value: 75 },
  { name: "C, C++, C#", value: 80 },
  { name: "Java", value: 80 },
  { name: "Database Management using PostgreSQL, MySQL, MS SQL", value: 80 },
  { name: "Python Fullstack Development", value: 90 },
];

const languages: { name: string; value: number }[] = [
  { name: "English", value: 80 },
  { name: "Filipino", value: 75 },
  { name: "Cebuano", value: 67 },
  { name: "French", value: 50 },
];

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1d212c] pt-5 pb-8">
      <section className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <aside className="space-y-6">
          {/* Profile Card */}
          <div className="bg-[#3c569c]/50 rounded-2xl shadow p-6 text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl tron-border">
            <div className="flex justify-center">
              <Image
                src="/cjaysonzapfp.png"
                alt="Profile Photo"
                width={160}
                height={160}
                priority
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="mt-4 text-2xl font-semibold">Christian Jay Sonza</h2>
            <p className="text-sm md:text-lg text-white-600 mt-1 italic">
              Software Engineer . Attorney . Computer Science Instructor
            </p>

            <div className="mt-4 text-left space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-red-500"
                />
                Davao City, Philippines
              </p>
              <p className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} color="#FFC03B" />
                christianjaysonza@gmail.com
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[#420097] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold mb-4">Programming Languages</h3>

            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-xs md:text-sm">{skill.name}</span>
                  <span className="text-xs md:text-sm">{skill.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-600 rounded"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="bg-[#690077] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold mb-4">Languages Spoken</h3>

            {languages.map((language) => (
              <div key={language.name} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-xs md:text-sm">{language.name}</span>
                  <span className="text-xs md:text-sm">{language.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-[#3550e9] rounded"
                    style={{ width: `${language.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>
        {/* -------------------------------------------------------------------------------------------- */}
        {/* RIGHT COLUMN */}
        <section className="lg:col-span-2 space-y-6">
          {/* About Me Header */}
          <header className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faUser}
              className="text-4xl text-yellow-400"
            />
            <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
          </header>
          {/* Software Engineer */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg md:text-xl font-semibold">
              💠 Software Engineer / FullStack Developer / Cyber Security Agent
            </h3>
            <p className="text-sm md:text-lg text-white mb-3">2028 – Present</p>
            <p className="text-sm md:text-base leading-relaxed">
              Skilled software developer specializing in design, development,
              and integration. Proficient in in-demand programming languages
              with extensive experience delivering software solutions to local
              industry clients.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              Demonstrates strong professional integrity and commitment to
              excellence. Takes ownership of responsibilities and consistently
              delivers quality work on schedule. Maintains a positive,
              collaborative attitude while staying current with emerging
              technologies and industry trends. Brings extensive expertise in
              full-stack web and application development, with particular
              proficiency in cyber security.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              Specializes in modernizing legacy systems using C# and C++, with
              deep expertise in cyber security. Brings hands-on experience in
              robotics and automation programming using Python. Passionate
              advocate for open-source solutions and leveraging emerging
              technologies to create accessible, sustainable software that
              empowers organizations and communities.
            </p>
          </div>

          {/* Instructor */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg md:text-xl font-semibold">
              💠 Computer Science Instructor, Ateneo de Davao University
            </h3>
            <p className="text-sm md:text-lg text-white mb-3">
              September 2028 – Present
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Delivers engaging classroom instruction to fulfill course learning
              outcomes in alignment with institutional goals. Partners with
              industry stakeholders, proposes innovative software development
              projects, and creates tailored software solutions to support
              organizational operations.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              Guides students through collaborative learning experiences that
              encourage creative problem-solving and partnership with industry
              professionals. Maintains exceptional teaching standards with
              outstanding attendance and punctuality.
            </p>
          </div>

          {/* Author */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg md:text-xl font-semibold">
              💠 Attorney VI (Department of Education)
            </h3>
            <p className="text-sm md:text-lg text-white mb-3">2033 - Present</p>
            <p className="text-sm md:text-base leading-relaxed">
              During Senior High School (SHS), was a prominent and actively
              participating member of Student Leadership engagements throughout
              the Philippines. Has been a President of the Supreme Secondary
              Learner Government in a Division(Davao del Sur) and Regional
              (Region XI), and has been part of the National Federation of
              Supreme Secondary Learner Government (NFSSLG) of batch 2023.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              Has since participated in many speaker roles throughout Region XI
              and continues to serve the people of the Philippines as an
              Attorney for the Department of Education.
            </p>
            {/* <p className="text-sm md:text-lg mt-2 text-blue-600 hover:underline cursor-pointer">
              www.youtube.com/@roytek7667/playlists
            </p> */}
          </div>

          {/* Education */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              🎓 Education
            </h3>
            <div className="mb-3">
              <p className="text-sm md:text-lg font-medium">
                2031 – Juris Doctor
              </p>
              <p className="text-sm md:text-lg text-white font-semibold">
                University of the Philippines Diliman
              </p>
              <p className="text-sm md:text-l text-white italic">
                Quezon City, Philippines
              </p>
            </div>
            <div className="mb-3">
              <p className="text-sm md:text-lg font-medium">
                2031 – Masters in Computer Science
              </p>
              <p className="text-sm md:text-lg text-white font-semibold">
                Ateneo de Manila University
              </p>
              <p className="text-sm md:text-l text-white italic">
                Quezon City, Philippines
              </p>
            </div>
            <div>
              <p className="text-sm md:text-lg font-medium">
                2028 – BS in Computer Science
              </p>
              <p className="text-sm md:text-lg text-white font-semibold">
                Ateneo de Davao University
              </p>
              <p className="text-sm md:text-l text-white italic">
                Davao City, Philippines
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
