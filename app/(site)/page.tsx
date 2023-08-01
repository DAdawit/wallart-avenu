import Image from "next/image";
import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
import Hero from "./components/Home/Hero";
// import { Project, ProjectsType } from "@/types/Project";
export default async function Home() {
  const projects = await getProjects();
  return (
    <main>
      <Hero />
      {projects.map((project) => (
        <div key={project._id}>
          <Link href={`/projects/${project.slug}`}>{project.name}</Link>
        </div>
      ))}
    </main>
  );
}
