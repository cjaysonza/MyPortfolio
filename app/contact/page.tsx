"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

interface ContactCardProps {
  icon: any;
  title: string;
  info: string;
  isLink?: boolean;
  iconColor: string;
  hoverBorderColor: string;
}

function ContactCard({
  icon,
  title,
  info,
  isLink,
  iconColor,
  hoverBorderColor,
}: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!isLink) {
      navigator.clipboard.writeText(info);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }
  };

  const content = isLink ? (
    <a
      href={info}
      target="_blank"
      rel="noopener noreferrer"
      className="text-cyan-300 hover:underline truncate"
      title={info}
    >
      {info}
    </a>
  ) : (
    <span>{info}</span>
  );

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl bg-[#222631] p-6 text-white shadow-lg transition-all duration-300 ease-out hover:scale-105 cursor-pointer border-2 border-transparent ${hoverBorderColor}`}
      onClick={handleCopy}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-3xl shrink-0 ${iconColor}`}
      />
      <div className="flex flex-col overflow-hidden">
        <h3 className="text-xl font-semibold flex items-center">
          {title}
          {copied && (
            <span className="ml-2 text-sm text-green-400">Copied!</span>
          )}
        </h3>
        <div className="text-lg md:text-base lg:text-lg">{content}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div
      className="relative min-h-screen px-6 py-16 pb-8"
      style={{
        backgroundImage: `url('/ContactInfoBg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay div */}
      <div className="absolute inset-0 bg-[#1d212c] opacity-80 z-0"></div>
      {/* Content div */}
      <div className="relative mx-auto max-w-4xl z-10">
        <div className="flex justify-center pt-8">
          <h1 className="inline-flex items-center gap-3 text-6xl font-semibold text-white">
            You can find me here ;)
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <ContactCard
            icon={faEnvelope}
            title="Email"
            info="christianjaysonza@gmail.com"
            iconColor="text-yellow-400"
            hoverBorderColor="hover:border-yellow-400"
          />
          <ContactCard
            icon={faPhone}
            title="Call Me"
            info="+639177054669"
            iconColor="text-green-500"
            hoverBorderColor="hover:border-green-500"
          />
          <ContactCard
            icon={faGithub}
            title="GitHub"
            info="https://github.com/cjaysonza"
            isLink={true}
            iconColor="text-gray-300"
            hoverBorderColor="hover:border-gray-300"
          />
          <ContactCard
            icon={faYoutube}
            title="Youtube"
            info="https://www.youtube.com/@Jay-zh8vs"
            isLink={true}
            iconColor="text-red-600"
            hoverBorderColor="hover:border-red-600"
          />
          <ContactCard
            icon={faFacebook}
            title="Facebook"
            info="https://www.facebook.com/christianjaysonza"
            isLink={true}
            iconColor="text-blue-600"
            hoverBorderColor="hover:border-blue-600"
          />
          <ContactCard
            icon={faLocationDot}
            title="Location"
            info="Davao City, Philippines"
            iconColor="text-red-500"
            hoverBorderColor="hover:border-red-500"
          />
        </div>
      </div>
    </div>
  );
}
