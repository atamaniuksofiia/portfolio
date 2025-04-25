"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/Card"; // Імпортуємо Card
import { Button } from "@/app/components/Button"; // Імпортуємо Button

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Work Experience</h1>

      {/* Edvantis */}
      <Card>
        <CardTitle>React Developer | Edvantis</CardTitle>
        <CardDescription>January 2025 - Present</CardDescription>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Developed and configured Storybook environments for two web
              portals within a monorepo.
            </li>
            <li>Created scalable, reusable UI components with TypeScript.</li>
            <li>
              Maintained consistency across portals via theme management and
              modular structures.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            href="https://github.com/your-repo"
            external
          >
            GitHub Repo
          </Button>
        </CardFooter>
      </Card>

      {/* SoftServe */}
      <Card>
        <CardTitle>Learning Competence Lead | SoftServe</CardTitle>
        <CardDescription>May 2021 - October 2024</CardDescription>
        <CardContent>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Led mentorship programs for over 10,000 employees across multiple
              regions.
            </li>
            <li>
              Expanded mentor networks and doubled shadowing program
              participation.
            </li>
            <li>
              Automated mentorship processes, cutting operational costs by 75%.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            href="https://github.com/your-repo"
            external
          >
            GitHub Repo
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
