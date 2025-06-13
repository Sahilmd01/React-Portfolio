import React from 'react';
import { Briefcase, Code, User, Download } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4 transition-all duration-300 hover:scale-105 hover:bg-primary/20">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold transition-all duration-500 hover:text-primary/80">
            Crafting Digital <span className="text-primary hover:text-primary/70 transition-colors duration-300">Experiences</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Column - Profile Card */}
          <div className="lg:w-1/2 group">
            <div className="h-full bg-muted/20 border border-muted rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30 transition-all duration-300 group-hover:border-primary/50 group-hover:scale-110">
                  {/* Profile picture - replace src with your image path */}
                  <img
                    src="/profile-logo.png" // Update this path to your profile image
                    alt="Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">Personal Profile</h3>
                  <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">Full Stack Developer</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                  I specialize in building modern web applications with a focus on performance,
                  accessibility, and user experience. My approach combines technical expertise
                  with creative problem-solving to deliver impactful digital solutions.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
                    <h4 className="font-semibold text-primary transition-colors duration-300 hover:text-primary/80">Frontend</h4>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">React, Next.js, Tailwind</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg border border-muted transition-all duration-300 hover:border-primary/50 hover:shadow-md hover:scale-[1.02]">
                    <h4 className="font-semibold text-primary transition-colors duration-300 hover:text-primary/80">Backend</h4>
                    <p className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Node.js, Express, Java</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 flex-1 text-center hover:shadow-md hover:scale-[1.02] active:scale-95"
                  >
                    Contact Me
                  </a>

                  <a
                    href="/public/md sahil full stack resume.pdf"  // You may want to ensure it has a .pdf or valid extension
                    className="px-6 py-3 rounded-lg border border-muted hover:bg-muted/50 transition-all duration-300 flex items-center justify-center gap-2 flex-1 hover:shadow-md hover:scale-[1.02] active:scale-95"
                    download
                  >
                    <Download className="h-4 w-4 transition-transform duration-300 hover:translate-y-0.5" />
                    Resume
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-muted/20 border border-muted rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Code className="h-6 w-6 transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">Development Philosophy</h3>
                  <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                    I believe in writing clean, maintainable code with thorough documentation.
                    My development process emphasizes testing, performance optimization, and
                    progressive enhancement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/20 border border-muted rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                  <Briefcase className="h-6 w-6 transition-transform duration-300 hover:rotate-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 transition-colors duration-300 hover:text-primary">Professional Approach</h3>
                  <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground/80">
                    With experience in both startups and enterprise environments,
                    I adapt my workflow to project needs. I value clear communication,
                    agile methodologies, and continuous learning.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/20 border border-muted rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
                <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 hover:scale-110">15+</div>
                <div className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Projects Completed</div>
              </div>
              <div className="bg-muted/20 border border-muted rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-xl hover:border-primary/30 hover:bg-muted/30 hover:-translate-y-1">
                <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 hover:scale-110">100%</div>
                <div className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};