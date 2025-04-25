"use client";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/app/components/Card";
import { Button } from "@/app/components/Button";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section className="space-y-8 pt-24">
      <h1 className="section-heading">Projects</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* To-Do App */}
        <Card>
          <CardTitle>To-Do App</CardTitle>
          <CardDescription>React, TypeScript, Tailwind CSS</CardDescription>

          <CardContent>
            <p className="text-sm font-medium mb-2">
              Role: Front-End React Developer
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>
                  Feature-Rich Task Management using React and TypeScript
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Responsive UI with Tailwind CSS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Reusable Component Architecture</span>
              </li>
            </ul>
          </CardContent>

          <CardFooter>
            <Button
              href="https://todo-app-s15q.vercel.app"
              external
              variant="primary"
              size="sm"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button
              href="https://github.com/atamaniuksofiia/todo-app"
              external
              variant="outline"
              size="sm"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Repo
            </Button>
          </CardFooter>
        </Card>

        {/* Picture Generation App */}
        <Card>
          <CardTitle>Picture Generation App</CardTitle>
          <CardDescription>JavaScript, RESTful API, HTML, CSS</CardDescription>

          <CardContent>
            <p className="text-sm font-medium mb-2">
              Role: Front-End JavaScript Developer
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Dynamic Image Search with Pixabay API</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Progressive Loading System</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Interactive UI with Lightbox Gallery</span>
              </li>
            </ul>
          </CardContent>

          <CardFooter>
            <Button
              href="https://atamaniuksofiia.github.io/goit-js-hw-12/"
              external
              variant="primary"
              size="sm"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button
              href="https://github.com/atamaniuksofiia/goit-js-hw-12"
              external
              variant="outline"
              size="sm"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Repo
            </Button>
          </CardFooter>
        </Card>

        {/* Alice's Mergeland */}
        <Card>
          <CardTitle>Alice&apos;s Mergeland</CardTitle>
          <CardDescription>JavaScript, HTML, CSS</CardDescription>

          <CardContent>
            <p className="text-sm font-medium mb-2">
              Role: Team Lead / Scrum Master
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Team Leadership and Project Management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Responsive Web Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span>Interactive Gallery with Swiper.js</span>
              </li>
            </ul>
          </CardContent>

          <CardFooter>
            <Button
              href="https://atamaniuksofiia.github.io/alice_s_mergeland/"
              external
              variant="primary"
              size="sm"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
            <Button
              href="https://github.com/atamaniuksofiia/alice_s_mergeland"
              external
              variant="outline"
              size="sm"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Repo
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
