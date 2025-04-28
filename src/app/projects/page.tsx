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
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="section-heading">Projects</h1>
      <Card>
        <CardTitle>To-Do App</CardTitle>
        <CardDescription>React, TypeScript, Tailwind CSS</CardDescription>

        <CardContent>
          <div className="flex justify-between items-start gap-4">
            {/* Left: Text content */}
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">
                Role: Front-End React Developer
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Feature-Rich Task Management: Developed core functionality
                    for task creation, deletion, and status toggling using React
                    and TypeScript, ensuring smooth and responsive user
                    interactions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Responsive UI with Tailwind CSS: Implemented a clean,
                    adaptive interface optimized for desktop and mobile users
                    using utility-first styling with Tailwind.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Reusable Component Architecture: Structured the project with
                    modular, reusable components, enabling scalability and
                    maintainability.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    State Management with React Hooks: Applied useState and
                    other React hooks for effective local state management and
                    interactive UI behavior.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Project Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 shrink-0">
              <Image
                src="/images/todo-app.png"
                alt="To-Do App Preview"
                width={200}
                height={200}
                quality={100}
                priority
                className="object-cover w-full h-full scale-105"
              />
            </div>
          </div>
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

      <Card>
        <CardTitle>Picture Generation App</CardTitle>
        <CardDescription>JavaScript, RESTful API, HTML, CSS</CardDescription>

        <CardContent>
          <div className="flex justify-between items-start gap-4">
            {/* Left: Text content */}
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">
                Role: Front-End JavaScript Developer
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Dynamic Image Search Functionality: Implemented dynamic
                    image search functionality using the Pixabay API with
                    JavaScript, HTML5, and CSS3.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Progressive Loading with &quot;Load More&quot; Feature:
                    Developed a progressive content loading system with a
                    &quot;Load more&quot; button to optimize page performance
                    and enhance user experience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    User Interface Optimization: Enhanced the usability of the
                    interface by integrating interactive elements such as an
                    image gallery with Lightbox support.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Image circle */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 shrink-0">
              <Image
                src="/images/pg.png"
                alt="Picture Generation App Preview"
                width={100}
                height={100}
                quality={100}
                priority
                className="object-cover w-full h-full scale-105"
              />
            </div>
          </div>
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
          <div className="flex justify-between items-start gap-4">
            {/* Left: Text content */}
            <div className="flex-1">
              <p className="text-sm font-medium mb-2">
                Role: Team Lead / Scrum Master
              </p>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Team Management and Project Leadership: Led the development
                    team as Team Lead and Scrum Master.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Development of Multiple Sections: Implemented and styled the
                    Unique Features, Gallery, Reviews, Footer, Terms &
                    Conditions, and Privacy Policy sections, maintaining a
                    consistent and aesthetically pleasing design.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Responsive Web Development: Designed the page for both
                    desktop and mobile, maintaining a seamless and user-friendly
                    experience across different screen sizes using HTML5, CSS3,
                    and JavaScript.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Interactive Gallery with Swiper.js: Integrated the Swiper.js
                    library in the Gallery section, enabling smooth click and
                    touch-based navigation, enhancing usability and
                    interactivity.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Image circle */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 shrink-0">
              <Image
                src="/images/alice-mergeland.png"
                alt="Alice's Mergeland Preview"
                width={300}
                height={300}
                quality={100}
                priority
                className="object-cover w-full h-full scale-105"
              />
            </div>
          </div>
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
    </section>
  );
}
