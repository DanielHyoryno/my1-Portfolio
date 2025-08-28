// src/Components/PortoGrid.jsx
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function PortoGrid() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
