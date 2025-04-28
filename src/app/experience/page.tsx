"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/Card";
import { Button } from "@/app/components/Button";

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Work Experience</h1>

      <Card>
        <CardTitle>React Developer | Edvantis</CardTitle>
        <CardDescription>January 2025 - Present</CardDescription>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Developed and configured Storybook environments for two separate
              web portals within a single monorepo architecture, enabling
              isolated component development and visual testing.
            </li>
            <li>
              Designed and implemented a scalable project structure supporting
              both portals under one repository, ensuring modularity,
              reusability, and ease of maintenance.
            </li>
            <li>
              Integrated UI components, themes, and configuration files across
              both portals while maintaining visual and functional consistency.
            </li>
            <li>
              Applied TypeScript for type-safe component development and
              improved code reliability.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" href="https://www.edvantis.com/" external>
            Edvantis
          </Button>
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>Learning Competence Lead | SoftServe</CardTitle>
        <CardDescription>May 2021 - October 2024</CardDescription>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <p>
              I led the Embedded Learning Management Department within SoftServe
              University, managing mentorship, shadowing, and training programs
              for over 10,000 employees.
            </p>
            <p>My main achievements in this position:</p>
            <li>
              Mentorship Expansion: Grew the mentorship program to over 1,500
              participants by 2024, integrating it into the developer onboarding
              process.
            </li>
            <li>
              Shadowing Program: Doubled the number of shadowing pairs during my
              leadership, enhancing skill-sharing across the organization.
            </li>
            <li>
              Process Optimization: Led the automation of mentor matching
              processes, resulting in a 75% reduction in operational costs and
              increased efficiency.
            </li>
            <li>
              Inclusive Mentorship: Expanded mentorship beyond the company,
              offering programs for veterans and individuals with disabilities,
              helping them transition into IT careers.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            href="https://www.softserveinc.com/uk-ua"
            external
          >
            SoftServe
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
