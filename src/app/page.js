// pages/index.js

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center py-16 container relative">
      <main className="max-w-[35rem]   px-4 ">
        <div className="flex items-center mt-4">
          <Image
            src="/jagdish.jpg" // Replace with your image path
            alt="Jagdish Patil"
            width={100} // Set the width of the image
            height={100} // Set the height of the image
            className="rounded-full" // Tailwind class for rounded image
          />
          <div className="flex space-x-4 flex-col justify-center">
            <div>
              <span className="ml-4 text-xl font-bold ">Jagdish Patil</span>
            </div>
            <div className="flex space-x-2 mt-2">
              <a
                href="https://github.com/jagdishpatil02"
                target="_blank"
                rel="noopener noreferrer"
                className=" "
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  height={25}
                  width={25}
                />
              </a>
              <a
                href="https://twitter.com/jagdishpatil02"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  size="2x"
                  height={25}
                  width={25}
                />
              </a>
              <a
                href="https://linkedin.com/in/jagdish-patil"
                target="_blank"
                rel="noopener noreferrer"
                className=" "
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  height={25}
                  width={25}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Social Media Icons */}

        <p className="mt-4 text-lg  my-4">
          Software Engineer with expertise in building user interfaces. Enjoys
          indulging in memes, desi hip hop, movies, and cricket in spare time.
        </p>
        <div className="relative group inline-block">
          <a
            href="https://jagdishpatil02.github.io/sideprojects/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block  group "
          >
            My (side) projects
            <span className="absolute left-0 bottom-0 h-0.5 w-full bg-[#222] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </div>
      </main>

      <footer className="flex justify-start mt-10 space-x-4  absolute bottom-2"></footer>
    </div>
  );
}
