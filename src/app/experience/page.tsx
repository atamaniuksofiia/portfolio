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
      {/* Shidduch.info */}
      <Card>
        <CardTitle>Full-Stack Developer | Shidduch.info</CardTitle>
        <CardDescription>
          October 2024 - Present · Matchmaking Platform
        </CardDescription>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Developed <strong>advanced data management features</strong>{" "}
              including duplicate record merging with automatic field
              consolidation, comprehensive audit logging system for user actions
              (CREATE/EDIT/SHARE), and Forest Admin integration.
            </li>
            <li>
              Implemented{" "}
              <strong>complex filtering and search functionality</strong> with
              multi-select location filters, dynamic age range checkboxes,
              state-based neighborhood filtering, and bilingual (Hebrew/English)
              autocomplete for educational institutions using TypeORM query
              builders and React Query.
            </li>
            <li>
              Integrated{" "}
              <strong>third-party services and authentication</strong> including
              SendGrid email service with file attachments, JWT token
              validation, Forest Admin Smart Actions, and resolved critical
              CORS/authorization issues for AWS EC2 production deployment.
            </li>
            <li>
              Optimized <strong>application performance</strong> by implementing
              lazy-loading with filter-based data display, reducing initial load
              from thousands of records to on-demand fetching, and managing
              efficient state with Zustand and React Query.
            </li>
          </ul>
          <p className="text-sm mt-3 text-muted-foreground">
            <strong>Stack:</strong> TypeScript, NestJS, PostgreSQL, TypeORM,
            React, Next.js 14, Zustand, React Query, Tailwind CSS, Forest Admin,
            Docker, AWS EC2, PM2, Nginx, SendGrid, Swagger/OpenAPI
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" href="https://shidduch.info/" external>
            Shidduch.info
          </Button>
        </CardFooter>
      </Card>
      {/* brandhq - Current Position */}
      <Card>
        <CardTitle>Full-Stack Developer | brandhq</CardTitle>
        <CardDescription>
          April 2025 - Present · Digital Asset Management Platform
        </CardDescription>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Developed and integrated <strong>Stripe payment system</strong>{" "}
              for subscription management and billing workflows.
            </li>
            <li>
              Designed and implemented a comprehensive{" "}
              <strong>admin panel</strong> with advanced user management
              capabilities, supporting organization oversight, user permissions,
              and system analytics.
            </li>
            <li>
              Created and configured <strong>beta testing flow</strong> and user
              registration workflows.
            </li>
            <li>
              Architected organization and workspace deletion functionality with{" "}
              <strong>Supabase integration</strong>.
            </li>
            <li>
              Leveraged <strong>AI-driven development</strong> and strategic
              prompting techniques to accelerate feature implementation,
              optimize code solutions, and enhance overall development
              efficiency.
            </li>
            <li>
              Integrated <strong>TypeScript</strong> for type-safe development
              and improved code reliability across frontend and backend
              operations.
            </li>
            <li>
              Applied <strong>Tailwind CSS</strong> and modern UI components for
              responsive design, maintaining visual consistency across admin
              interfaces and user portals.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" href="https://brandhq.app/" external>
            brandhq
          </Button>
        </CardFooter>
      </Card>

      {/* Edvantis */}
      <Card>
        <CardTitle>React Developer | Edvantis</CardTitle>
        <CardDescription>November 2024 - February 2025</CardDescription>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              Developed and configured <strong>Storybook environments</strong>{" "}
              for two separate web portals within a single monorepo
              architecture, enabling isolated component development and visual
              testing.
            </li>
            <li>
              Designed and implemented a{" "}
              <strong>scalable project structure</strong> supporting both
              portals under one repository, ensuring modularity, reusability,
              and ease of maintenance.
            </li>
            <li>
              Integrated{" "}
              <strong>UI components, themes, and configuration files</strong>{" "}
              across both portals while maintaining visual and functional
              consistency.
            </li>
            <li>
              Applied <strong>TypeScript</strong> for type-safe component
              development and improved code reliability.
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="outline" href="https://www.edvantis.com/" external>
            Edvantis
          </Button>
        </CardFooter>
      </Card>

      {/* SoftServe */}
      <Card>
        <CardTitle>Learning Competence Lead | SoftServe</CardTitle>
        <CardDescription>
          May 2021 - October 2024 · L&D Specialist
        </CardDescription>
        <CardContent>
          <p className="text-sm mb-3">
            I led the <strong>Mentorship Office</strong> within SoftServe
            University, managing mentorship, shadowing, and training programs
            for over 10,000 employees.
          </p>
          <p className="text-sm font-semibold mb-2">
            My main achievements in this position:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Mentorship Expansion:</strong> Grew the mentorship program
              to over 1,500 participants by 2024, integrating it into the
              developer onboarding process.
            </li>
            <li>
              <strong>Shadowing Program:</strong> Doubled the number of
              shadowing pairs during my leadership, enhancing skill-sharing
              across the organization.
            </li>
            <li>
              <strong>Process Optimization:</strong> Led the automation of
              mentor matching processes, resulting in a 75% reduction in
              operational costs and increased efficiency.
            </li>
            <li>
              <strong>Inclusive Mentorship:</strong> Expanded mentorship beyond
              the company, offering programs for veterans and individuals with
              disabilities, helping them transition into IT careers.
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
