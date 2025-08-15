import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "GIS-Based Utility & Complaint Management System",
    description:
      "A GIS-enabled web app for logging and tracking society maintenance complaints via interactive maps with AI-driven worker allocation and real-time analytics dashboard.",
    image: "/projects/gis-utility.png",
    tags: ["React", "FastAPI", "Python", "GIS", "AI/ML", "SQLite"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aman-patel-18",
  },
  {
    id: 2,
    title: "PlantHealthAI - Smart Diagnostics for Plants",
    description:
      "AI-enabled application for farmers to diagnose crop health, detect diseases using TensorFlow models, and get actionable recommendations through a seemless interface.",
    image: "/projects/project2.png",
    tags: ["Python", "TensorFlow", "Tkinter", "Numpy", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aman-patel-18",
  },
  {
    id: 3,
    title: "News Portal App with Admin Dashboard",
    description:
      "A full-stack MERN news portal with role-based authentication, admin dashboard, RESTful APIs, Redux Toolkit for state management, and a responsive TailwindCSS UI.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Aman-patel-18/News-Article-Application",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my key projects showcasing my skills in modern web development,
          AI integration, and creating intelligent, scalable solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover relative ${
                project.id === 1 ? "opacity-70 pointer-events-none" : ""
              }`}
            >
              {/* Ribbon for GIS Project */}
              {project.id === 1 && (
                <div className="absolute top-4 left-[-40px] w-[160px] bg-red-600 text-white text-center font-bold py-1 rotate-[-45deg] shadow-lg z-10">
                  In Work
                </div>
              )}

              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.id !== 1 && (
                      <>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Github Button */}
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Aman-patel-18"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
