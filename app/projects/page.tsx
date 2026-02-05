import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faArrowUpRightFromSquare,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  title: string;
  titleColor: string;
  borderHoverColor: string;
  imageSrc: string;
  description: string;
  sourceLink?: string;
  downloadUrl?: string;
}

function ProjectCard({
  title,
  titleColor,
  borderHoverColor,
  imageSrc,
  description,
  sourceLink,
  downloadUrl,
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row overflow-hidden rounded-2xl border-4 border-black/40 bg-[#263355] 
      transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl ${borderHoverColor}`}
    >
      {/* Image (left – 1/3) */}
      <div className="relative w-full md:w-1/3 min-h-65">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content (right – 2/3) */}
      <div className="flex w-full md:w-2/3 flex-col justify-between p-6">
        <div>
          <h3 className={`text-xl md:text-2xl font-semibold ${titleColor}`}>
            {title}
          </h3>

          <p className="mt-3 text-base md:text-lg leading-relaxed text-white/90">
            {description}
          </p>
        </div>

        {sourceLink && (
          <a
            href={sourceLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-2 text-base md:text-l font-bold text-cyan-300 hover:underline"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-sm shrink-0"
            />
            Visit Project Source
          </a>
        )}

        {downloadUrl && (
          <a
            href={downloadUrl}
            download
            className="mt-4 inline-flex w-fit items-center gap-2 text-base md:text-l font-bold text-green-400 hover:underline"
          >
            <FontAwesomeIcon icon={faDownload} className="text-sm shrink-0" />
            Download File
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#1d212c] px-6 pb-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex justify-center pt-8">
          <h1 className="inline-flex items-center gap-2 md:gap-3 text-2xl md:text-3xl font-semibold text-white">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="text-purple-400 text-5xl md:text-6xl shrink-0"
            />
            My Projects
          </h1>
        </div>

        {/* Large intentional gap before cards */}
        <div className="mt-16 space-y-10">
          <ProjectCard
            title="Pet Simulator"
            titleColor="text-indigo-300"
            borderHoverColor="hover:border-indigo-300"
            imageSrc="/PetSim.png"
            description={`Highly composed C++ Project developed during my first year at ADDU. 
              It is a fully-fleshed out Pet Simulator Video game with multiple endings, 
              developed by multiple people, and is playable through the terminal.`}
          />

          <ProjectCard
            title="pordafeople Coding Team"
            titleColor="text-cyan-300"
            borderHoverColor="hover:border-cyan-300"
            imageSrc="/pordafeopleOrg.png"
            sourceLink="https://github.com/pordafeople"
            description={`Small Team of Programmers in Ateneo de Davao. 
              Developed the Pet Simulator and ADDU Schedbuilder.`}
          />

          <ProjectCard
            title="PHP E-Commerce Webpage"
            titleColor="text-red-400"
            borderHoverColor="hover:border-red-400"
            imageSrc="/STUFF.png"
            description={`An E-Commerce webpage composed of PHP for accessibility and 
              testing for web security features during Introduction to Computing.`}
          />

          <ProjectCard
            title="Student Grading System (Java Console)"
            titleColor="text-blue-400"
            borderHoverColor="hover:border-blue-400"
            imageSrc="/SGS.png"
            description={`A functional, manually operated, Student Grading System developed as 
              my final project for Computer Programming 2.`}
          />

          <ProjectCard
            title="Rainforest Prime"
            titleColor="text-green-400"
            borderHoverColor="hover:border-green-400"
            imageSrc="/RainforestPrimeFrontPage.png"
            description={`The project, Rainforest Prime, is a logistics and delivery 
              platform designed to facilitate milestone-based package tracking. 
              Its primary objective is to streamline the delivery process by providing senders,
               receivers, and staff with intuitive interfaces to monitor their respective shipments, 
               and receive items efficiently and reliably.`}
          />

          <ProjectCard
            title="Crate My Stuff (CMS)"
            titleColor="text-green-200"
            borderHoverColor="hover:border-green-200"
            imageSrc="/CompanyLogo.png"
            description={`The system is being developed by The CMS Group, a (very real) company 
              operating within the logistics industry. The CMS Group specializes in digital retail solutions and package delivery services, 
              offering integrated logistics support for online sellers and customers alike. 
              This Programming Team was assembled for the completion and submission of Rainforest Prime`}
          />

          <ProjectCard
            title="Learners' Discipline Manual"
            titleColor="text-orange-400"
            borderHoverColor="hover:border-orange-400"
            imageSrc="/LDM-Thumbnail.png"
            downloadUrl="/Learners' Discipline Manual - DepEd Davao del Sur [FINAL].pdf"
            description={`The Learners' Discipline Manual from the Department of Education – Division of Davao del Sur 
              serves as a guide for teachers and learners in maintaining a positive learning environment. It outlines rules, regulations, and procedures for discipline and promoting positive behavior.`}
          />
        </div>
      </div>
    </div>
  );
}
