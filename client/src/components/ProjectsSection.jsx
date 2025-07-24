import { ArrowRight, ExternalLink, Github, ChevronUp, Star, Code, ChevronDown, MoveRight } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 7,
    title: "NauraCare",
    category: "SaaS",
    description: "Multi Role Hospital Management Website with advanced patient tracking and billing systems",
    image: "/projects/project7.png",
    tags: ["React", "Tailwind", "Node.js", "Stripe", "razorpay", "mongoDB", "express"],
    demoUrl: "https://nauracare.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/neuracare.git",
    featured: true,
    accentColor: "from-emerald-500 to-teal-600"
  },
  {
    id: 1,
    title: "Vante & Co.",
    category: "E-commerce",
    description: "Luxury fashion e-commerce with seamless checkout experience",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "Node.js", "Stripe"],
    demoUrl: "https://e-commerce-website-4w6a.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/E-commerce-website.git",
    featured: true,
    accentColor: "from-purple-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Converse Pro",
    category: "Communication",
    description: "Real-time chat application with media sharing and end-to-end encryption",
    image: "/projects/project2.png",
    tags: ["Socket.IO", "MongoDB", "Express", "React"],
    demoUrl: "https://converse-pro-frontend.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/converse-pro.git",
    featured: true,
    accentColor: "from-blue-500 to-cyan-600"
  },
  {
    id: 3,
    title: "Blogni AI",
    category: "Artificial Intelligence",
    description: "AI-powered content generation platform with multi-language support",
    image: "/projects/project3.png",
    tags: ["Gemini AI", "Clerk Auth", "Redux", "Next.js"],
    demoUrl: "https://blogni.vercel.app",
    githubUrl: "https://github.com/Sahilmd01/Blogni.git",
    accentColor: "from-amber-500 to-orange-600"
  },
  {
    id: 4,
    title: "Spendlix",
    category: "Finance",
    description: "Financial tracking with analytics dashboard and expense categorization",
    image: "/projects/project4.png",
    tags: ["Chart.js", "React", "Node.js", "Firebase"],
    demoUrl: "https://spendlix.vercel.app/login",
    githubUrl: "https://github.com/Sahilmd01/Spendlix.git",
    accentColor: "from-rose-500 to-pink-600"
  },
  {
    id: 5,
    title: "Eattoo",
    category: "E-commerce",
    description: "Gourmet food delivery service platform with real-time tracking",
    image: "/projects/project5.png",
    tags: ["Stripe", "Redux", "React", "Mapbox"],
    demoUrl: "https://eattoo-food-delivery-website-frontend.onrender.com/",
    githubUrl: "https://github.com/Sahilmd01/Eattoo-food-delivery-website.git",
    accentColor: "from-violet-500 to-purple-600"
  },
   {
    id: 6,
    title: "JobQue",
    category: "SaaS",
    description: "Gourmet food delivery service platform with real-time tracking",
    image: "/projects/project6.png",
    tags: ["under development","Stripe", "Redux", "React", "Mapbox"],
    demoUrl: "#",
    githubUrl: "#",
    accentColor: "from-violet-500 to-purple-600"
  }
];

const categoryColors = {
  "E-commerce": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  "Communication": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  "Artificial Intelligence": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  "Finance": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
};

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.15, 0.1]);

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const categories = ["All", ...new Set(projects.map(project => project.category))];

  return (
    <section 
      id="projects" 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      </motion.div>
      
      {/* Floating animated orbs */}
      <motion.div 
        className="absolute -top-20 -left-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 rounded-full bg-secondary/10 blur-3xl"
        animate={{
          x: [20, -20, 20],
          y: [10, -10, 10],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Section header with animation */}
        <motion.div 
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary/80 uppercase mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-8 md:w-12 h-px bg-primary/50"></div>
            PROJECT PORTFOLIO
            <div className="w-8 md:w-12 h-px bg-primary/50"></div>
          </motion.span>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Selected </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Works
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A curated collection of my most impactful digital solutions, blending innovative design with robust functionality.
          </motion.p>
        </motion.div>

        {/* Interactive filter tabs - Desktop */}
        <div className="hidden md:flex justify-center mb-12">
          <motion.div 
            className="inline-flex bg-muted p-1 rounded-full border border-muted-foreground/10 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setShowAll(false);
                }}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Mobile filter dropdown */}
        <div className="md:hidden relative mb-8 max-w-xs mx-auto">
          <motion.button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between px-4 py-3 bg-background border border-muted-foreground/20 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span>{activeFilter}</span>
            <ChevronDown 
              size={16} 
              className={`transition-transform duration-200 ${isMobileFilterOpen ? "rotate-180" : ""}`}
            />
          </motion.button>
          <AnimatePresence>
            {isMobileFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute z-10 mt-1 w-full bg-background border border-muted-foreground/20 rounded-lg shadow-lg overflow-hidden"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveFilter(category);
                      setIsMobileFilterOpen(false);
                      setShowAll(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      activeFilter === category
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Projects grid - Enhanced masonry layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          <AnimatePresence>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl bg-card border border-muted/20 hover:border-primary/30 transition-all duration-500 hover:shadow-lg"
              >
                {/* Gradient accent */}
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${project.accentColor}`}></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <motion.div 
                    className="absolute top-4 right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-amber-900 px-2.5 py-1 rounded-full text-[0.7rem] font-bold flex items-center z-10 shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Star size={12} className="mr-1" /> Featured
                  </motion.div>
                )}

                {/* Project image with hover effect */}
                <div className="h-52 sm:h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-5">
                    <motion.p 
                      className="text-white/90 text-sm translate-y-5 group-hover:translate-y-0 transition-transform duration-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Project content */}
                <div className="p-5 pt-3">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      categoryColors[project.category] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 py-0.5 text-[0.7rem] font-medium rounded-full ${
                          tag.includes("Coming")
                            ? "bg-destructive/10 text-destructive border border-destructive/20"
                            : "bg-muted/80 text-foreground/80 hover:bg-primary hover:text-primary-foreground"
                        } transition-colors duration-300`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex justify-between items-center border-t border-muted/20 pt-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                        project.demoUrl === "#"
                          ? "text-muted-foreground cursor-not-allowed"
                          : "text-foreground/80 hover:text-primary group"
                      } transition-colors duration-300`}
                      onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                    >
                      <ExternalLink size={15} />
                      {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                      <MoveRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                        project.githubUrl === "#"
                          ? "text-muted-foreground cursor-not-allowed"
                          : "text-foreground/80 hover:text-primary group"
                      } transition-colors duration-300`}
                      onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                    >
                      <Code size={15} />
                      {project.githubUrl === "#" ? "Private" : "View Code"}
                      <MoveRight size={13} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show more/less button */}
        {filteredProjects.length > 3 && (
          <motion.div 
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                showAll
                  ? "bg-muted text-foreground hover:bg-muted/90 border border-muted-foreground/20"
                  : "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg"
              }`}
            >
              {showAll ? (
                <>
                  Show Less Projects
                  <ChevronUp size={18} className="ml-2" />
                </>
              ) : (
                <>
                  View All Projects ({filteredProjects.length})
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* CTA section */}
        <motion.div 
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-muted/30 to-muted/10 border border-muted-foreground/10 rounded-xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3">Have a project in mind?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <motion.a
                href="#contact"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-md transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={16} className="ml-2" />
              </motion.a>
              <motion.a
                href="https://github.com/sahilmd01"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-transparent text-foreground font-medium hover:bg-muted transition-all duration-300 border border-muted-foreground/30 hover:border-primary/50"
              >
                Explore GitHub
                <Github size={16} className="ml-2" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};