"use client";

import Link from "next/link";

export default function ProjectsPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Projects</h1>

      {/* To-Do App */}
      <div className="border rounded-md p-4">
        <h2 className="text-2xl font-semibold">To-Do App</h2>
        <p className="text-sm text-gray-500">React, TypeScript, Tailwind CSS</p>
        <p className="mt-2 font-semibold">Role: Front-End React Developer</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Feature-Rich Task Management: Developed core functionality for task
            creation, deletion, and status toggling using React and TypeScript,
            ensuring smooth and responsive user interactions.
          </li>
          <li>
            Responsive UI with Tailwind CSS: Implemented a clean, adaptive
            interface optimized for desktop and mobile users.
          </li>
          <li>
            Reusable Component Architecture: Structured the project with
            modular, reusable components, enabling scalability and
            maintainability.
          </li>
          <li>
            State Management with React Hooks: Applied useState and other React
            hooks for effective local state management and interactive UI
            behavior.
          </li>
        </ul>
        <div className="flex gap-4 mt-4">
          <Link
            href="https://todo-app-s15q.vercel.app"
            target="_blank"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/atamaniuksofiia/todo-app"
            target="_blank"
            className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-md text-sm"
          >
            GitHub Repo
          </Link>
        </div>
      </div>

      {/* Picture Generation App */}
      <div className="border rounded-md p-4">
        <h2 className="text-2xl font-semibold">Picture Generation App</h2>
        <p className="text-sm text-gray-500">
          JavaScript, RESTful API, HTML, CSS
        </p>
        <p className="mt-2 font-semibold">
          Role: Front-End JavaScript Developer
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Dynamic Image Search Functionality: Implemented dynamic image search
            functionality using the Pixabay API with JavaScript, HTML5, and
            CSS3.
          </li>
          <li>
            Progressive Loading with &quot;Load More&quot; Feature: Developed a
            progressive content loading system with a &quot;Load more&quot;
            button to optimize page performance and enhance user experience.
          </li>
          <li>
            User Interface Optimization: Enhanced the usability of the interface
            by integrating interactive elements such as an image gallery with
            Lightbox support.
          </li>
        </ul>
        <div className="flex gap-4 mt-4">
          <Link
            href="https://atamaniuksofiia.github.io/goit-js-hw-12/"
            target="_blank"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/atamaniuksofiia/goit-js-hw-12"
            target="_blank"
            className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-md text-sm"
          >
            GitHub Repo
          </Link>
        </div>
      </div>

      {/* Alice’s Mergeland */}
      <div className="border rounded-md p-4">
        <h2 className="text-2xl font-semibold">
          Alice’s Mergeland (Team Project at Evoplay)
        </h2>
        <p className="text-sm text-gray-500">JavaScript, HTML, CSS</p>
        <p className="mt-2 font-semibold">
          Role: Team Lead / Scrum Master / Front-End Developer
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Team Management and Project Leadership: Led the development team as
            Team Lead and Scrum Master.
          </li>
          <li>
            Development of Multiple Sections: Implemented and styled the Unique
            Features, Gallery, Reviews, Footer, Terms & Conditions, and Privacy
            Policy sections.
          </li>
          <li>
            Responsive Web Development: Designed the page for both desktop and
            mobile, maintaining seamless experience across screen sizes.
          </li>
          <li>
            Interactive Gallery with Swiper.js: Integrated Swiper.js for smooth
            click and touch-based navigation.
          </li>
        </ul>
        <div className="flex gap-4 mt-4">
          <Link
            href="https://atamaniuksofiia.github.io/alice_s_mergeland/"
            target="_blank"
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm"
          >
            Live Demo
          </Link>
          <Link
            href="https://github.com/atamaniuksofiia/alice_s_mergeland"
            target="_blank"
            className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-md text-sm"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </section>
  );
}
