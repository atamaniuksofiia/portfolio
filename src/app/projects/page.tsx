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

      {/* Stock Dashboard */}
      <Card>
        <CardTitle>Stock Market Dashboard</CardTitle>
        <CardDescription>React, TypeScript, Financial Data API</CardDescription>

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
                    Real-Time Financial Data Integration: Built a comprehensive
                    stock market dashboard displaying real-time company
                    information, stock prices, and financial metrics for major
                    tech companies (AAPL, NVDA, MSFT).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Dynamic Multi-Window Interface: Implemented a mosaic-style
                    layout with draggable, resizable panels allowing users to
                    monitor multiple stocks simultaneously with auto-arrange
                    functionality.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Comprehensive Company Profiles: Developed detailed company
                    information cards displaying ticker symbols, legal names,
                    stock exchanges, business descriptions, contact details, and
                    filing information.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Theme Customization: Integrated light/dark theme toggle with
                    Blueprint UI framework for enhanced user experience and
                    reduced eye strain during extended market monitoring
                    sessions.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Project Image */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 shrink-0">
              <Image
                src="/images/documents.png"
                alt="Stock Dashboard Preview"
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
            href="https://atamaniuksofiia.github.io/dashboards/"
            external
            variant="primary"
            size="sm"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
          <Button
            href="https://github.com/atamaniuksofiia/dashboards"
            external
            variant="outline"
            size="sm"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub Repo
          </Button>
        </CardFooter>
      </Card>

      {/* Minimal Payment Page */}
      <Card>
        <CardTitle>Minimal Payment Page</CardTitle>
        <CardDescription>React, TypeScript, Responsive Design</CardDescription>

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
                    Clean Payment Interface: Designed and implemented a
                    minimalist, user-friendly payment page with focus on
                    simplicity and conversion optimization.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Form Validation & Security: Built robust client-side form
                    validation for payment details including card number, expiry
                    date, and CVV with real-time error feedback.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Responsive Design: Created a fully responsive layout
                    ensuring seamless payment experience across desktop, tablet,
                    and mobile devices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    Modern UI/UX: Applied modern design principles with smooth
                    animations, clear visual hierarchy, and intuitive user flow
                    to reduce cart abandonment.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right: Image circle */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-300 shrink-0">
              <Image
                src="/images/payment.png"
                alt="Payment Page Preview"
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
            href="https://atamaniuksofiia.github.io/minimal-payment-page/"
            external
            variant="primary"
            size="sm"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
          <Button
            href="https://github.com/atamaniuksofiia/minimal-payment-page"
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
