import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
  <div>
    <h1 className="text-7xl font-extrabold">Hey, I&apos;m <span className="bg-gradient-to-r from-blue-300 via-orange-500 to-yellow-400 bg-clip-text text-transparent">Eppelflep!</span></h1>
    <p className="mt-3 mb-20 text-xl text-gray-600">Hey there! Thanks for visiting my website, I appreciate it. Below, you can check out some of my projects and if you click around you can get to know me better. Have a great time!</p>

    <h2 className="font-bold text-gray-700 text-3xl">My projects</h2>

    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link
        key={project._id}
        className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
        href={`/projects/${project.slug}`}>
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
            />
          )}
          <div className="mt-2 font-extrabold bg-gradient-to-r from-gradient1 to-gradient2 bg-clip-text text-transparent">{project.name}</div>
          </Link>
      ))}
    </div>
  </div>
  )
}
