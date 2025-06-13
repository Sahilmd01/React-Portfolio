import { ArrowRight, ExternalLink, Github, ChevronUp } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Food Web with payment Gatway",
    description: "Eattoo is a beautiful full stack MERN e-commerce website with food delivery functionality, user authentication, and payment processing.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "MongoDB", "Express", "Node", "Stripe"],
    demoUrl: "https://eattoo-food-delivery-website-frontend.onrender.com/",
    githubUrl: "https://github.com/Sahilmd01/Eattoo-food-delivery-website.git",
  },
  {
    id: 2,
    title: "AI Powered Blog Web Based on Gemini",
    description: `A dynamic MERN stack blog powered by Google Gemini AI for smart content generation.
                  Experience seamless publishing, intelligent suggestions, and personalized reading`,
    image: "/projects/project2.png",
    tags: ["React", "Express.js", "Next.js", "TailwindCSS","MongoDB","Gemini"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: `Full-featured e-commerce platform with user authentication, product management, cart system, and Stripe payment processing.`,
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication, product management, cart system, and Stripe payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication, product management, cart system, and Stripe payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with user authentication, product management, cart system, and Stripe payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects, each carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-muted hover:border-primary/20"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground border border-muted-foreground/10 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 flex flex-col items-center gap-4">
          {projects.length > 3 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors shadow-lg hover:-translate-y-1 transform transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground hover:bg-muted/80 border border-muted-foreground/20"
                  : "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/30"
              }`}
            >
              {showAll ? (
                <>
                  See Less Projects
                  <ChevronUp size={18} className="ml-2" />
                </>
              ) : (
                <>
                  See All Projects
                  <ArrowRight size={18} className="ml-2" />
                </>
              )}
            </button>
          )}
          <a
            href="https://github.com/sahilmd01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent text-foreground font-medium hover:bg-muted transition-colors border border-muted-foreground hover:border-primary hover:text-primary"
          >
            Explore More on GitHub
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};