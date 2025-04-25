"use client";

import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/app/components/Card"; // Імпортуємо Card
import { Button } from "@/app/components/Button"; // Імпортуємо Button

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">About Me</h1>

      {/* Soft Skills */}
      <Card>
        <CardTitle>Soft Skills</CardTitle>
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
      </Card>

      {/* Tech Skills */}
      <Card>
        <CardTitle>Tech Skills</CardTitle>
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
      </Card>

      {/* Education */}
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
