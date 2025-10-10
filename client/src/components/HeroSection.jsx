import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  const codeSnippets = [
    "function createMagic() {",
    "  const passion = [",
    "    'Innovative Design',",
    "    'Clean Code',", 
    "    'User Experience',",
    "    'Creative Solutions'",
    "  ];",
    "  return craftWithLove(passion)",
    "    .buildWithPrecision()",
    "    .deliverWithExcellence();",
    "}"
  ];

  // Typing effect
  useEffect(() => {
    const currentLine = codeSnippets[currentCodeLine];
    if (displayedCode.length < currentLine.length) {
      setTimeout(() => {
        setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
      }, 50);
    } else {
      setTimeout(() => {
        if (currentCodeLine < codeSnippets.length - 1) {
          setCurrentCodeLine(prev => prev + 1);
          setDisplayedCode("");
        } else {
          setTimeout(() => {
            setCurrentCodeLine(0);
            setDisplayedCode("");
          }, 3000);
        }
      }, 500);
    }
  }, [displayedCode, currentCodeLine]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/90 to-primary/5" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full"
            style={{
              width: Math.random() * 100 + 20 + 'px',
              height: Math.random() * 100 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 80],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        <motion.div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-600/20 blur-[100px]" animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-amber-400/20 to-pink-600/20 blur-[100px]" animate={{ x: [0, -60, 0], y: [0, 60, 0], scale: [1, 1.3, 1] }} transition={{ duration: 18, repeat: Infinity, delay: 5 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-20 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } } }}>
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <Sparkles className="h-4 w-4" /> Welcome to my portfolio
            </motion.div>

            <motion.h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <span className="block text-foreground">Code. Create.</span>
              <motion.span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2" animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 6, repeat: Infinity }} style={{ backgroundSize: '200% 100%' }}>Innovate.</motion.span>
            </motion.h1>

            <motion.p className="text-xl sm:text-2xl text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              I'm <span className="text-primary font-semibold">Sahil</span> — a Full-Stack Developer crafting fast, elegant, and scalable digital solutions.
            </motion.p>

            {/* Services */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: <Palette className="h-4 w-4 sm:h-5 sm:w-5" />, title: "UI/UX Design", description: "Beautiful interfaces", color: "from-purple-500 to-pink-500" },
                { icon: <Code className="h-4 w-4 sm:h-5 sm:w-5" />, title: "Web Development", description: "Modern frameworks", color: "from-blue-500 to-cyan-500" },
                { icon: <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />, title: "Full Stack", description: "End-to-end solutions", color: "from-green-500 to-emerald-500" }
              ].map((service, index) => (
                <motion.div key={service.title} className="group p-4 rounded-xl bg-background/60 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer backdrop-blur-sm" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }} whileHover={{ y: -6, scale: 1.02 }}>
                  <motion.div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`} whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>{service.icon}</motion.div>
                  <div className="text-sm font-semibold text-foreground mb-2">{service.title}</div>
                  <div className="text-xs text-muted-foreground">{service.description}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <motion.a href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Code className="h-5 w-5" /> <span>View My Work</span> <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a href="#contact" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <span>Let's Talk</span> <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

          {/* Code Display */}
          <motion.div className="flex-1 flex justify-center lg:justify-end max-w-lg w-full" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
            <motion.div className="relative bg-background/80 border border-border/50 rounded-3xl p-8 backdrop-blur-sm shadow-2xl w-full max-w-md group hover:shadow-3xl transition-all duration-500" whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400"></div><div className="w-3 h-3 rounded-full bg-yellow-400"></div><div className="w-3 h-3 rounded-full bg-green-400"></div></div>
                <div className="flex-1 text-center"><div className="text-sm font-mono font-semibold text-muted-foreground">sahil-portfolio.js</div></div>
                <Sparkles className="h-4 w-4 text-yellow-500" />
              </div>

              <div className="font-mono text-sm space-y-2 min-h-48 bg-primary/5 rounded-xl p-6 border border-primary/10">
                {codeSnippets.slice(0, currentCodeLine).map((line, index) => (
                  <div key={index} className={line.includes("function") ? "text-purple-400 font-semibold" : line.includes("return") ? "text-blue-400 font-semibold" : line.includes("passion") ? "text-green-400" : line.includes("'") ? "text-amber-400" : "text-muted-foreground"}>{line}</div>
                ))}
                {currentCodeLine < codeSnippets.length && (
                  <div className={codeSnippets[currentCodeLine].includes("function") ? "text-purple-400 font-semibold" : codeSnippets[currentCodeLine].includes("return") ? "text-blue-400 font-semibold" : codeSnippets[currentCodeLine].includes("passion") ? "text-green-400" : codeSnippets[currentCodeLine].includes("'") ? "text-amber-400" : "text-muted-foreground"}>
                    {displayedCode}<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-1 text-primary">▊</motion.span>
                  </div>
                )}
              </div>

              <motion.div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center border-2 border-background shadow-2xl" animate={{ y: [0, -10, 0], rotate: [0, -5, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }}><Code className="h-6 w-6 text-white" /></motion.div>
              <motion.div className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50 shadow-lg flex items-center gap-2" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.5, type: "spring" }}><Award className="h-4 w-4 text-amber-500" /><span className="text-sm font-semibold text-foreground">Let's code..</span></motion.div>
              <motion.div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border/50 shadow-lg" initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ delay: 2, type: "spring" }}><div className="text-xs font-mono text-muted-foreground">Developed by</div><div className="text-sm font-bold text-foreground">Sahil</div></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 10, 0, -10] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
        <motion.div className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg" whileHover={{ scale: 1.05 }}><MousePointerClick className="h-3 w-3" /><span>Explore Sahil's Work</span></motion.div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"><motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-3 bg-primary rounded-full mt-2" /></motion.div>
      </motion.div>
    </section>
  );
};