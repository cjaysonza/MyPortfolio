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
  { name: "NodeJS, ReactJS, NextJS", value: 70 },
  { name: "GraphQL", value: 70 },
  { name: "Python Fullstack Web Development using Odoo 18/19", value: 90 },
  {
    name: "Delphi Desktop and Fullstack Web Development using UNIGUI",
    value: 90,
  },
  { name: "HTML, Javascript, CSS", value: 90 },
  { name: "Database Management using PostgreSQL, MySQL, MS SQL", value: 95 },
  { name: "CRM (Go High Level, GHL)", value: 80 },
];

const languages: { name: string; value: number }[] = [
  { name: "English", value: 80 },
  { name: "Filipino", value: 75 },
  { name: "Cebuano", value: 67 },
  { name: "French", value: 50 },
];

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#1d212c] pt-5">
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

            <h2 className="mt-4 text-xl font-semibold">Christian Jay Sonza</h2>
            <p className="text-sm text-white-600 mt-1 italic">
              Computer Science Professor . Software Engineer . Attorney .
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
              <p className="flex items-center gap-2 text-yellow-400 hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faYoutube} color="red" /> YouTube Channel
              </p>
              <p className="flex items-center gap-2 text-yellow-400 hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn Profile
              </p>
              <p className="flex items-center gap-2 text-yellow-400 hover:underline cursor-pointer">
                <FontAwesomeIcon icon={faGithub} /> JavaScript GitHub Demos
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold mb-4">Skills</h3>

            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-blue-600 rounded"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Languages */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold mb-4">Languages Spoken</h3>

            {languages.map((language) => (
              <div key={language.name} className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>{language.name}</span>
                  <span>{language.value}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-blue-600 rounded"
                    style={{ width: `${language.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* RIGHT COLUMN */}
        <section className="lg:col-span-2 space-y-6">
          {/* About Me Header */}
          <header className="flex items-center gap-2">
            <span className="text-xl">👤</span>
            <h2 className="text-4xl font-semibold">About Me</h2>
          </header>

          {/* Software Engineer */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold">
              💠 Software Engineer / Web Developer
            </h3>
            <p className="text-sm text-white mb-3">1996 – Present</p>
            <p className="text-sm leading-relaxed">
              Highly skilled software development professional bringing talents
              for software design, development and integration. Offering
              advanced knowledge of in-demand programming languages. Gained
              extensive background in writing code and developing software
              solutions to various local industry clients.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Practices exemplary work ethics. Strives to exceed expectations
              and prioritizes meeting deadlines without supervision. Aggressive
              yet cheerful with colleagues. Constantly updates and trains on
              recent developments on technologies and platforms, well trained in
              ReactJS, NextJS, GraphQL and Odoo.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Specializes in modernizing legacy systems using Delphi, UniGUI and
              C#. An experienced Database Administrator with actual experience
              in Windows Server Failover Clustering and Replication. An avid
              Linux and Ubuntu user. Underwent training in CRM using Go High
              Level (GHL).
            </p>
          </div>

          {/* Instructor */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold">
              💠 Computer Science Instructor, Ateneo de Davao University
            </h3>
            <p className="text-sm text-white mb-3">November 1987 – Present</p>
            <p className="text-sm leading-relaxed">
              Conducts actual classroom instruction designed to achieve course
              objectives aligned with the school’s mission and vision.
              Collaborates with industry, makes project proposals for software
              development, and develops and implements software solutions for
              various aspects of operations.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Mentors students, fostering a collaborative learning environment
              that promotes innovation and knowledge sharing with industry
              partners. Maintains very high standards in delivering classes and
              is very rarely late or absent.
            </p>
          </div>

          {/* Author */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold">
              💠 Author of Various YouTube Instructional Videos
            </h3>
            <p className="text-sm text-white mb-3">2021 – Present</p>
            <p className="text-sm leading-relaxed">
              Instructional videos on History of Computing, Boolean Logic and
              Circuitverse, Assembly Language Programming, Database Desktop
              Development using C#, and Introduction to JavaScript, HTML and
              CSS.
            </p>
            <p className="text-sm mt-2 text-blue-600 hover:underline cursor-pointer">
              www.youtube.com/@roytek7667/playlists
            </p>
          </div>

          {/* Education */}
          <div className="bg-[#3c569c] rounded-2xl shadow p-6 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl">
            <h3 className="font-semibold mb-4">🎓 Education</h3>
            <div className="mb-3">
              <p className="text-sm font-medium">
                1996 – Masters in Computer Science
              </p>
              <p className="text-sm text-white font-semibold">
                Ateneo de Manila University
              </p>
              <p className="text-sm text-white font-semibold">
                Quezon City, Philippines
              </p>
            </div>
            <div>
              <p className="text-sm font-medium">
                1987 – BS in Management Engineering
              </p>
              <p className="text-sm text-white font-semibold">
                Ateneo de Davao University
              </p>
              <p className="text-sm text-white font-semibold">
                Davao City, Philippines
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
