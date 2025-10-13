import React, { useState, useEffect } from 'react';
import { Briefcase, Code, User, Download, Calendar, Sparkles, Target, Github, Linkedin, Twitter, Mail, Star } from 'lucide-react';

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const achievements = [{ number: "15+", label: "Projects", icon: <Briefcase className="h-5 w-5" />, suffix: "" }, { number: "3", label: "Years Exp", icon: <Calendar className="h-5 w-5" />, suffix: "+" }, { number: "100", label: "Success", icon: <Target className="h-5 w-5" />, suffix: "%" }, { number: "50", label: "Clients", icon: <User className="h-5 w-5" />, suffix: "+" }];
  const techStack = [{ category: "Frontend", items: ["React", "Next.js", "TypeScript","JavaScript","HTML", "Tailwind"] }, { category: "Backend", items: ["Node.js", "Express", "Java", "Python"] }, { category: "Cloud", items: ["AWS", "Docker", "Vercel", "MongoDB"] }];
  const features = ["Full-stack expertise", "Clean, maintainable code", "Performance optimization", "Agile methodology", "24/7 support", "Timely delivery"];
  const socialLinks = [{ icon: <Github className="h-5 w-5" />, href: "#" }, { icon: <Linkedin className="h-5 w-5" />, href: "#" }, { icon: <Twitter className="h-5 w-5" />, href: "#" }, { icon: <Mail className="h-5 w-5" />, href: "#contact" }];

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setCounter(prev => (prev + 1) % 4), 2000);
    return () => clearInterval(interval);
  }, []);

  const tabContent = {
    personal: "Passionate about creating digital solutions that make a difference. When I'm not coding, I'm exploring new technologies, contributing to open-source, and mentoring aspiring developers.",
    professional: "With 3+ years in full-stack development, I've delivered 15+ successful projects using modern technologies. I specialize in scalable architecture and performance optimization.",
    approach: "I believe in clean code, thorough testing, and user-centered design. My process emphasizes collaboration, agile methodologies, and continuous improvement."
  };

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ease-out" style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
        <div className="absolute w-80 h-80 bg-secondary/5 rounded-full blur-3xl transition-all duration-1500 ease-out" style={{ transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)` }} />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-20 right-20 animate-float"><div className="w-8 h-8 bg-primary/20 rounded-lg rotate-45" /></div>
        <div className="absolute bottom-40 left-20 animate-float animation-delay-2000"><div className="w-6 h-6 bg-secondary/20 rounded-full" /></div>
      </div>

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6 transition-all duration-500 hover:bg-primary/15 hover:scale-105 group cursor-pointer">
            <div className="relative"><Sparkles className="h-5 w-5 text-primary animate-pulse" /><div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" /></div>
            <span className="text-base font-semibold text-primary tracking-wide">ABOUT ME </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Transforming</span>
            <span className="block text-primary animate-pulse">Ideas Into Reality</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building digital experiences that combine <span className="text-primary font-semibold">innovation</span>, <span className="text-primary font-semibold"> performance</span>, and <span className="text-primary font-semibold"> elegance</span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 md:gap-12">
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60 relative overflow-hidden group">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary rounded-full -translate-x-16 translate-y-16" />
              </div>
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transition-all duration-500 group-hover:border-primary/40 group-hover:scale-110 relative">
                      <img src="/profile-logo.png" alt="MD Sahil" className="w-full h-full object-cover" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">MD Sahil</h2>
                    <p className="text-primary text-lg font-semibold mb-4">Full Stack Developer</p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {achievements.map((achievement, index) => (
                        <div key={index} className={`p-3 rounded-xl bg-background/50 border border-border transition-all duration-300 hover:scale-105 hover:border-primary/30 ${counter === index ? 'bg-primary/10 border-primary/50' : ''}`}>
                          <div className="flex items-center gap-2 justify-center md:justify-start">
                            {achievement.icon}
                            <div><div className="font-bold text-lg">{achievement.number}{achievement.suffix}</div><div className="text-xs text-muted-foreground">{achievement.label}</div></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex border-b border-border mb-6">
                  {['personal', 'professional', 'approach'].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-300 ${activeTab === tab ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
                <div className="min-h-[120px]"><p className="text-muted-foreground leading-relaxed">{tabContent[activeTab]}</p></div>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Code className="h-6 w-6 text-primary" />Tech Stack Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {techStack.map((stack, index) => (
                  <div key={index} className="bg-background/50 border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:scale-105 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform duration-300"><Code className="h-4 w-4" /></div>
                      <h4 className="font-semibold text-lg">{stack.category}</h4>
                    </div>
                    <div className="space-y-2">
                      {stack.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />{item}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card/50 border border-border rounded-3xl p-8 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-2xl font-bold mb-6 text-center">Let's Work Together</h3>
              <div className="space-y-4">
                <a href="#contact" className="block w-full p-4 bg-primary text-primary-foreground rounded-xl text-center font-semibold transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg group">
                  <div className="flex items-center justify-center gap-3"><User className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />Start a Project</div>
                </a>
                <a href="/md-sahil-resume.pdf" className="block w-full p-4 border border-border rounded-xl text-center font-semibold transition-all duration-300 hover:bg-accent hover:border-primary/30 hover:scale-105 hover:shadow-lg group" download>
                  <div className="flex items-center justify-center gap-3"><Download className="h-5 w-5 group-hover:translate-y-0.5 transition-transform duration-300" />Download Resume</div>
                </a>
              </div>
              <div className="mt-6 p-4 bg-background/50 rounded-xl border border-border">
                <h4 className="font-semibold mb-3 text-center">Quick Connect</h4>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a key={index} href={social.href} className="p-2 bg-background rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110">{social.icon}</a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card/50 border border-border rounded-3xl p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card/60">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Star className="h-5 w-5 text-primary" />Why Choose Me</h3>
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg transition-all duration-300 hover:bg-background/50 hover:scale-105">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" /><span className="text-sm text-muted-foreground hover:text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/60 border border-border rounded-3xl p-6 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:border-primary/40 hover:bg-card-70">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <span className="font-semibold">Available</span>
                </div>
                <span className="text-sm text-muted-foreground bg-green-500/10 text-green-600 px-2 py-1 rounded-lg">
                  For new projects
                </span>
              </div>
              <div className="text-xs text-muted-foreground text-center bg-background/50 rounded-lg p-2">
                ⚡ Response time: Under 24 hours
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};