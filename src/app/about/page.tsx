"use client";

import { Card, CardTitle, CardContent } from "@/app/components/Card";
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
            I am a <strong>Full-Stack Developer</strong> specializing in
            TypeScript, React, Next.js, and NestJS with proven experience
            building production-ready applications. Skilled in PostgreSQL,
            TypeORM, state management (Zustand, React Query), and cloud
            deployments (AWS EC2, Docker).
            <br />
            <br />I leverage <strong>AI-driven development</strong> and
            strategic prompting to accelerate feature delivery and optimize code
            architecture. Strong background in API development, database design,
            and third-party integrations (Forest Admin, SendGrid).
            <br />
            <br />
            Fluent in <strong>English (B2+)</strong>, I thrive in collaborative
            environments and am passionate about creating efficient, scalable
            solutions. Let`&apos;`s connect!
          </p>
        </CardContent>
      </Card>

      {/* Education Card */}
      <Card>
        <CardTitle>Education</CardTitle>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>GoIT</strong> — FullStack Developer (2024)
              <ul className="ml-6 mt-1 list-disc list-inside text-foreground/70">
                <li>HTML and CSS</li>
                <li>JavaScript</li>
                <li>React, Redux</li>
                <li>Node.js</li>
              </ul>
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

      {/* Skills Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Tech Skills Dropdown Card */}
        <Card className="flex-1">
          <CardTitle>
            <button
              onClick={() => setOpenTechSkills(!openTechSkills)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold"
            >
              Technical Skills
              <span>{openTechSkills ? "▲" : "▼"}</span>
            </button>
          </CardTitle>
          {openTechSkills && (
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Frontend</h3>
                  <ul className="space-y-1 text-foreground/80">
                    <li>• React</li>
                    <li>• TypeScript</li>
                    <li>• Next.js</li>
                    <li>• Redux</li>
                    <li>• JavaScript</li>
                    <li>• HTML/CSS</li>
                    <li>• Tailwind</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    Backend & Tools
                  </h3>
                  <ul className="space-y-1 text-foreground/80">
                    <li>• Node.js</li>
                    <li>• Nest.js</li>
                    <li>• PostgreSQL</li>
                    <li>• Docker</li>
                    <li>• RESTful API</li>
                    <li>• GIT</li>
                    <li>• Storybook</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">Other</h3>
                  <ul className="space-y-1 text-foreground/80">
                    <li>• Stripe</li>
                    <li>• Vercel</li>
                    <li>• AI prompting (ChatGPT, Claude)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Soft Skills Dropdown Card */}
        <Card className="flex-1">
          <CardTitle>
            <button
              onClick={() => setOpenSoftSkills(!openSoftSkills)}
              className="w-full text-left flex justify-between items-center text-lg font-semibold"
            >
              Soft Skills
              <span>{openSoftSkills ? "▲" : "▼"}</span>
            </button>
          </CardTitle>
          {openSoftSkills && (
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                <li>Excellent communicator</li>
                <li>Willingness to learn</li>
                <li>Critical thinking</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
                <li>Emotional intelligence</li>
              </ul>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Courses & Certifications Card */}
      <Card>
        <CardTitle>Courses & Certifications</CardTitle>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
            <li>React Crash Course: From Zero to Hero - 2024, Udemy</li>
            <li>JavaScript Basics for Beginners - 2024, Udemy</li>
            <li>
              Agile Crash Course: Agile Project Management; Agile Delivery -
              2022, Udemy
            </li>
            <li>
              Agile Fundamentals: Including Scrum and Kanban - 2024, Udemy
            </li>
            <li>Formation of leadership skills - 2021, UCU</li>
            <li>
              Time Management. How to organize your team`&apos;`s time - 2021,
              LBS UCU
            </li>
            <li>Emotional intelligence - 2021, UCU</li>
          </ul>
        </CardContent>
      </Card>

      {/* Languages Card */}
      <Card>
        <CardTitle>Languages</CardTitle>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
            <li>
              <strong>English</strong> — Upper-intermediate (B2+)
            </li>
            <li>
              <strong>Ukrainian</strong> — Native
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}
