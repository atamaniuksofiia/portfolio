"use client";

import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/app/components/Card";
import { Button } from "@/app/components/Button";
import { useState } from "react";

export default function AboutPage() {
  const [openSoftSkills, setOpenSoftSkills] = useState(false);
  const [openTechSkills, setOpenTechSkills] = useState(false);

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">About Me</h1>

      {/* About Text Card */}
      <Card>
        <CardContent>
          <p className="text-sm leading-6 text-foreground/80">
            I am a motivated developer diving into web development with a strong
            focus on React, TypeScript, JavaScript, HTML, and CSS. With hands-on
            experience in team projects, I have honed my collaboration skills
            and ability to create engaging, user-friendly web applications.
            Currently, I am expanding my expertise by learning modern
            technologies, including Node.js. <br />
            <br />
            Dedicated to continuous improvement, I am eager to grow
            professionally while contributing to innovative projects. Fluent in
            English (B2+), I thrive in collaborative environments and am
            passionate about leveraging technology to create impactful
            solutions. Let’s connect!
          </p>
        </CardContent>
      </Card>

      {/* Education Card */}
      <Card>
        <CardTitle>Education</CardTitle>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
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
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Soft Skills Dropdown Card */}
        <Card className="flex-1">
          <CardTitle>
            <button
              onClick={() => setOpenSoftSkills(!openSoftSkills)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold"
            >
              Soft Skills
              <span>{openSoftSkills ? "-" : "+"}</span>
            </button>
          </CardTitle>
          {openSoftSkills && (
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Excellent communication</li>
                <li>Critical thinking</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
                <li>Emotional intelligence</li>
                <li>Willingness to learn</li>
              </ul>
            </CardContent>
          )}
        </Card>

        {/* Tech Skills Dropdown Card */}
        <Card className="flex-1">
          <CardTitle>
            <button
              onClick={() => setOpenTechSkills(!openTechSkills)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold"
            >
              Tech Skills
              <span>{openTechSkills ? "-" : "+"}</span>
            </button>
          </CardTitle>
          {openTechSkills && (
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
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
            </CardContent>
          )}
        </Card>
      </div>

      {/* Contact Section */}
      <Card>
        <CardFooter>
          <Button variant="primary" href="mailto:atamaniuksofiia@gmail.com">
            Contact Me
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
