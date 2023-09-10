"use client";

import { useState } from "react";

import {
  BsDatabaseFillGear,
  BsFiletypeXml,
  BsFillMoonStarsFill,
  BsGit,
  BsGithub,
  BsTypeH2,
} from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineCloudServer,
} from "react-icons/ai";
import { FaAws, FaCode, FaJava } from "react-icons/fa6";
import {
  SiAmazoncloudwatch,
  SiAmazonec2,
  SiAmazoniam,
  SiAmazons3,
  SiAmazonsqs,
  SiAndroid,
  SiAngular,
  SiAwslambda,
  SiAxios,
  SiBootstrap,
  SiCss3,
  SiDotnet,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNgrx,
  SiNodedotjs,
  SiOracle,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSpring,
  SiSwagger,
  SiThymeleaf,
  SiTypescript,
} from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { LuFileCode2, LuList } from "react-icons/lu";
import { TiCss3 } from "react-icons/ti";

import Image from "next/image";
import memoji from "../public/my-memoji.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleEmailClick = () => {
    window.location.href = `mailto:muditkhanna998@gmail.com`;
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              developedbymudit
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500
                 text-white px-4 py-2 rounded-md ml-8"
                  href="../../public/"
                  download="Mudit-Khanna-Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Mudit Khanna
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Full Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-7xl mx-auto dark:text-gray-400">
              MK, an experienced full-stack developer with 3+ years in the
              field, possesses a diverse skill set encompassing Java EE,
              JavaScript, TypeScript, SQL, and Android technologies. His
              expertise extends to Spring Framework, Spring AOP, Spring Data
              JPA, Spring Security, Rest Template, and JWT tokens. He's also
              well-acquainted with Amazon Web Services (AWS) and ASP.NET
              MVC/Identity Framework. MK excels in web development,
              demonstrating mastery in Angular, Thymeleaf, React, NgRx, and
              ExpressJS. Proficient in Git/Github for version control, he excels
              in crafting RESTful APIs and microservices with Swagger.
              Previously, he contributed to mission-critical web applications
              for General Electric at Capgemini Solutions, aiding in inventory
              management and billing. He also interned at Data Aces, focusing on
              AWS Lambda migrations and microservices using CloudFormation
              templates, before his tenure at OracleLens, where he played a
              pivotal role in building a contract trading platform using Spring,
              Angular, and JWT authentication.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a
              href="https://www.linkedin.com/in/mudit-khanna-0b0814177"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://www.github.com/muditkhanna98" target="_blank">
              <AiFillGithub />
            </a>
            <AiOutlineMail
              onClick={handleEmailClick}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div
            className="relative mx-auto bg-gradient-to-b
         from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96"
          >
            <Image
              src={memoji}
              layout="fill"
              objectFit="cover"
              alt="my-avatar"
            />
          </div>
        </section>

        <section>
          <div>
            <h2 className="text-5xl py-2 mt-3 text-teal-600 font-medium md:text-6xl text-center">
              <FaCode className="mx-auto" />
            </h2>
          </div>

          <div className="lg:flex flex-wrap gap-14 justify-center">
            <div
              className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110
             transform transition-transform duration-300 ease-in-out hover:shadow-teal-300 dark:bg-white"
            >
              <FaJava className="mx-auto text-8xl" />
              <h3 className="text-xl font-medium pt-8 pb-2 text-teal-600">
                Backend Technologies
              </h3>
              <ul>
                <li className="flex items-center">
                  <FaJava className="mr-3" /> Java EE
                </li>
                <li className="flex items-center">
                  <FaJava className="mr-3" /> Java Servlets
                </li>
                <li className="flex items-center">
                  <SiSpring className="mr-3" /> Spring Boot
                </li>
                <li className="flex items-center">
                  <SiSpring className="mr-3" /> Spring Data JPA
                </li>
                <li className="flex items-center">
                  <SiSpring className="mr-3" /> Spring Security
                </li>
                <li className="flex items-center">
                  <SiSpring className="mr-3" /> Spring AOP
                </li>
                <li className="flex items-center">
                  <SiSpring className="mr-3" /> Rest Template
                </li>
                <li className="flex items-center">
                  <VscJson className="mr-3" /> Rest API
                </li>
                <li className="flex items-center">
                  <SiAxios className="mr-3" /> Axios
                </li>
                <li className="flex items-center">
                  <SiExpress className="mr-3" /> Express.js
                </li>
                <li className="flex items-center">
                  <SiNodedotjs className="mr-3" /> NodeJs
                </li>
                <li className="flex items-center">
                  <SiSwagger className="mr-3" /> Swagger
                </li>
              </ul>
            </div>

            <div
              className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110
             transform transition-transform duration-300 ease-in-out hover:shadow-teal-300  dark:bg-white"
            >
              <LuFileCode2 className="mx-auto text-8xl" />
              <h3 className="text-xl font-medium pt-10 pb-2 text-teal-600">
                Front End Technologies
              </h3>
              <ul>
                <li className="flex items-center">
                  <SiReact className="mr-3" /> React
                </li>
                <li className="flex items-center">
                  <SiAngular className="mr-3" /> Angular
                </li>
                <li className="flex items-center">
                  <SiJavascript className="mr-3" /> JavaScript
                </li>
                <li className="flex items-center">
                  <SiTypescript className="mr-3" /> TypeScript
                </li>
                <li className="flex items-center">
                  <SiAndroid className="mr-3" /> Android Studio
                </li>
                <li className="flex items-center">
                  <SiDotnet className="mr-3" /> ASP.NET MVC
                </li>
                <li className="flex items-center">
                  <SiThymeleaf className="mr-3" /> Thymeleaf
                </li>
                <li className="flex items-center">
                  <SiBootstrap className="mr-3" /> Bootstrap
                </li>
                <li className="flex items-center">
                  <SiAngular className="mr-3" /> Angular Material
                </li>
                <li className="flex items-center">
                  <SiHtml5 className="mr-3" /> HTML
                </li>
                <li className="flex items-center">
                  <TiCss3 className="mr-3" /> CSS
                </li>
              </ul>
            </div>

            <div
              className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110
             transform transition-transform duration-300 ease-in-out hover:shadow-teal-300  dark:bg-white"
            >
              <BsDatabaseFillGear className="mx-auto text-8xl " />
              <h3 className="text-xl font-medium pt-10 pb-2 text-teal-600">
                Database Management
              </h3>

              <ul>
                <li className="flex items-center">
                  <SiMysql className="mr-3" /> MySQL
                </li>
                <li className="flex items-center">
                  <BsTypeH2 className="mr-3" /> H2 Database Engine
                </li>
                <li className="flex items-center">
                  <SiPostgresql className="mr-3" /> PostgreSql
                </li>
                <li className="flex items-center">
                  <SiOracle className="mr-3" /> Oracle PL/SQL
                </li>
              </ul>
            </div>

            <div
              className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110
             transform transition-transform duration-300 ease-in-out hover:shadow-teal-300  dark:bg-white"
            >
              <AiOutlineCloudServer className="mx-auto text-8xl " />
              <h3 className="text-xl font-medium pt-10 pb-2 text-teal-600">
                Cloud Services
              </h3>
              <li className="flex items-center">
                <FaAws className="mr-3" /> Amazon Web Services
              </li>
              <li className="flex items-center">
                <SiAmazoniam className="mr-3" /> IAM
              </li>
              <li className="flex items-center">
                <SiAmazonec2 className="mr-3" /> EC2 Instance
              </li>
              <li className="flex items-center">
                <SiAmazons3 className="mr-3" /> S3 Bucket
              </li>
              <li className="flex items-center">
                <SiAmazonsqs className="mr-3" /> Simple Queue Services
              </li>
              <li className="flex items-center">
                <SiAmazoncloudwatch className="mr-3" /> CloudWatch
              </li>
              <li className="flex items-center">
                <SiAwslambda className="mr-3" /> Lambda
              </li>
            </div>

            <div
              className="text-center shadow-lg p-10 rounded-xl my-10 hover:scale-110
             transform transition-transform duration-300 ease-in-out hover:shadow-teal-300  dark:bg-white"
            >
              <LuList className="mx-auto text-8xl " />
              <h3 className="text-xl font-medium pt-10 pb-2 text-teal-600">
                Others
              </h3>
              <li className="flex items-center">
                <BsGit className="mr-3" /> Git
              </li>
              <li className="flex items-center">
                <BsGithub className="mr-3" /> GitHub
              </li>
              <li className="flex items-center">
                <BsFiletypeXml className="mr-3" /> XML
              </li>
              <li className="flex items-center">
                <SiPostman className="mr-3" /> Postman
              </li>
              <li className="flex items-center">
                <SiJsonwebtokens className="mr-3" /> JWT Authentication
              </li>
              <li className="flex items-center">
                <SiNgrx className="mr-3" /> NgRx State Management
              </li>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
