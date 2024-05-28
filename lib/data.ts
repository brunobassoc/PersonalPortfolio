import React from "react";
import spotifystreams from "@/public/spotifystreams.png";
import whitequeen from "@/public/whitequeen.jpg"

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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "N-Queens Puzzle",
    description:
      "Exploration of the N Queens Puzzle, analyzing algorithms for efficient solutions.",
    tags: ["Python"],
    imageUrl: whitequeen,
  },
  {
    title: "Recommendation Analysis on Spotify",
    description:
      "Case study on personalized song suggestions derived from user preferences and listening history.",
    tags: ["Python", "Apache Spark", "Tableau"],
    imageUrl: spotifystreams,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Django",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Apache Spark",
  "Microsoft Excel",
  "Tailwind",
  "GraphQL",
  "PostgreSQL",
  "Tableau",
] as const;
