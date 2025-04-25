"use client";
import { useState } from "react";

export default function AboutPage() {
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const [showTechSkills, setShowTechSkills] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">About Me</h1>

      <p className="text-lg">
        I&apos;m a motivated Front-End Developer with hands-on experience
        building user-friendly applications using React, TypeScript, JavaScript,
        and Tailwind CSS. I enjoy working on team projects and constantly strive
        to improve code quality and UX.
      </p>

      <p>
        Currently, I’m working at <strong>Edvantis</strong> as a React
        Developer, where I set up scalable Storybook environments, implemented
        reusable components for a monorepo architecture, and collaborated on
        multi-portal design systems.
      </p>

      <p>
        My background in <strong>L&D and mentorship</strong> allows me to
        understand collaboration, documentation, and team efficiency from a
        broader perspective. While working at SoftServe, I led programs
        impacting over 10,000 employees, expanding mentorship and shadowing
        initiatives across multiple regions.
      </p>

      <p>
        I’m also passionate about modern technologies — currently diving deeper
        into Next.js, React Native, and building full-featured UI libraries with
        Storybook.
      </p>

      <p>
        In short: I love writing clean, accessible, and maintainable front-end
        code — and I’m always learning something new.
      </p>
      {/* Education Dropdown */}
      <div className="border rounded-md p-4">
        <button
          onClick={() => setShowEducation(!showEducation)}
          className="w-full text-left font-semibold text-xl flex justify-between items-center"
        >
          Education
          <span>{showEducation ? "▲" : "▼"}</span>
        </button>
        {showEducation && (
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>
              <strong>GoIT</strong> — FullStack Developer Program (2024 - 2025)
            </li>
            <li>
              <strong>Lviv Business School of UCU</strong> — HRM in Business
              (2021)
            </li>
            <li>
              <strong>Ukrainian Catholic University</strong> — Bachelor of
              General and Social Pedagogy (2017 - 2021)
            </li>
          </ul>
        )}
      </div>
      {/* Soft Skills Dropdown */}
      <div className="border rounded-md p-4">
        <button
          onClick={() => setShowSoftSkills(!showSoftSkills)}
          className="w-full text-left font-semibold text-xl flex justify-between items-center"
        >
          Soft Skills
          <span>{showSoftSkills ? "▲" : "▼"}</span>
        </button>
        {showSoftSkills && (
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>Excellent communication</li>
            <li>Critical thinking</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Emotional intelligence</li>
            <li>Willingness to learn</li>
          </ul>
        )}
      </div>

      {/* Tech Stack Dropdown */}
      <div className="border rounded-md p-4">
        <button
          onClick={() => setShowTechSkills(!showTechSkills)}
          className="w-full text-left font-semibold text-xl flex justify-between items-center"
        >
          Tech Stack
          <span>{showTechSkills ? "▲" : "▼"}</span>
        </button>
        {showTechSkills && (
          <ul className="mt-4 list-disc list-inside space-y-2">
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Storybook</li>
            <li>Material UI</li>
            <li>Redux</li>
            <li>RESTful API</li>
            <li>GIT</li>
          </ul>
        )}
      </div>
    </section>
  );
}
