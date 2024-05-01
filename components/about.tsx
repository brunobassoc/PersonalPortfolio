"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a{" "}
        <span className="font-medium">Computer Science</span> student, with passion for programming{" "}
        <span className="font-medium">front-end development</span> and 
        <span className="font-medium"> data analytics</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the possibility of multiple solutions to one problem. I <span className="underline">love</span> the
        feeling of finally getting the result for an issue. My core stack
        is{" "}
        <span className="font-medium">
          Python, Java, JavaScript, and PostgreSQL
        </span>
        . I am also familiar with TypeScript and Django. I am always looking to
        learn new technologies. Furthermore, I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> or an 
        <span className="font-medium"> internship</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not studying</span>, I enjoy playing
        video games, watching series, playing basketball and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">anatomy for my personal drawings</span>.
      </p>
    </motion.section>
  );
}
