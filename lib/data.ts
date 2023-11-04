import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dummyImg from "@/public/dummy-image.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Study",
    location: "Pelaihari, ID",
    description:
      "I graduated after 3.5 years of studying at Politeknik Negeri Tanah Laut. I immediately found a job as a front-end developer",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "Freelance Web Developer",
    location: "Pelaihari, ID",
    description:
      "I worked as a Web developer for 6 Month in Batuah Talenta Semesta . I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Internship Programmer",
    location: "Banjarmasin, ID",
    description:
      "I'm now a intern programmer at PT. Trio Motor. I'm working on a project with PHP and JavaScript..",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Coming Soon",
    description:
      "coming soon project",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: dummyImg,
  },
  {
    title: "Coming Soon",
    description:
      "coming soon project",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: dummyImg,
  },
    {
      title: "Coming Soon",
      description:
        "coming soon project",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: dummyImg,
    },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  'PHP',
  "React",
  "Next.js",
  "Laravel",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;