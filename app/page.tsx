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
              💠 Aspiring Software Developer, Ateneo de Davao University
            </h3>
            <p className="text-sm md:text-lg text-white mb-3">2024 – Present</p>
            <p className="text-sm md:text-base leading-relaxed">
              My interest in developing software that fixes everyday
              inconveniences became a passion for development and integration,
              and a curiosity towards web design and digital security. My
              journey in programming began with a love for video games and
              interest in creating mods for the games I played. This is what
              engages me in creating technology that is innovative, and ignite a
              passion of learning to make a program that is better than what I
              made yesterday.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              I have profound interest in modernizing legacy systems using C#
              and C++. A deep curiosity in cyber security. Brings hands-on
              experience in robotics and automation programming using Python.
              Creative modder using Java for my friends' Minecraft shenanigans.
              Passionate advocate for open-source solutions and leveraging
              emerging technologies to create accessible, sustainable software
              that empowers organizations and communities.
            </p>
          </div>
          {/* LGP */}
          <div className="bg-[#9c3c3c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg md:text-xl font-semibold">
              💠 Learner Government Program (Department of Education)
            </h3>
            <p className="text-sm md:text-lg text-white mb-3">2022 - 2024</p>
            <p className="text-sm md:text-base leading-relaxed">
              During Senior High School (SHS), was a prominent and actively
              participating member of Student Leadership engagements throughout
              the Philippines. Has been a President of the Supreme Secondary
              Learner Government in a Division(Davao del Sur) and Regional
              (Region XI), and has been Board Member of the National Federation
              of Supreme Secondary Learner Government (NFSSLG) of batch
              2023-2024.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              I have since participated in many speaker roles throughout Region
              XI and continues to exchange and promulgate my experience in Good
              Governance and Team Building.
            </p>
            {/* <p className="text-sm md:text-lg mt-2 text-blue-600 hover:underline cursor-pointer">
              www.youtube.com/@roytek7667/playlists
            </p> */}
          </div>

          {/* EIC */}
          <div className="bg-[#24770f] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg md:text-xl font-semibold">
              💠 Editor-in-Chief, Campus Journalism
            </h3>
            <p className="text-sm md:text-lg text-white mb-3">2020 – 2024</p>
            <p className="text-sm md:text-base leading-relaxed">
              Seasoned in writing and experienced in competitive journalism, my
              many years of creating stories and articles has given me the
              skillset needed to articulate information and details in a concise
              and literary manner that is pleasant to read and easy to
              comprehend.
            </p>
            <p className="text-sm md:text-base leading-relaxed mt-2">
              With these abilities, I have been an Editor-in-Chief of my junior
              (Virtuoso) and senior (Voice of Miral) years of secondary
              education. I have since used my prowess to compete in writing and
              debating competitions throughout my time in tertiary education to
              keep further hone my skills, and keep my abilities sharp and above
              the expectations.
            </p>
          </div>

          {/* Education */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              🎓 Education
            </h3>
            <div>
              <p className="text-sm md:text-lg font-medium">
                2024-Present – B.S. Computer Science
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
