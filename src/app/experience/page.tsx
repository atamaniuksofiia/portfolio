"use client";

export default function ExperiencePage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Work Experience</h1>

      {/* Edvantis */}
      <div className="border rounded-md p-4">
        <h2 className="text-2xl font-semibold">React Developer || Edvantis</h2>
        <p className="text-sm text-gray-500">January 2025 - Present</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            Developed and configured Storybook environments for two web portals
            within a monorepo.
          </li>
          <li>Created scalable, reusable UI components with TypeScript.</li>
          <li>
            Maintained consistency across portals via theme management and
            modular structures.
          </li>
        </ul>
      </div>

      {/* SoftServe */}
      <div className="border rounded-md p-4">
        <h2 className="text-2xl font-semibold">
          Learning Competence Lead || SoftServe
        </h2>
        <p className="text-sm text-gray-500">May 2021 - October 2024</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
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
      </div>
    </section>
  );
}
