# 💼 Developer Portfolio – React + Vite + Tailwind
## ⭐ Star this repo if you like it!


A fast, modern, and responsive developer portfolio website built using **React**, **Vite**, and **Tailwind CSS**. Designed to showcase your projects, skills, and contact information in a clean, professional format.

## 🚀 Tech Stack

- ⚛️ React (with Vite for fast dev/build)
- 💨 Tailwind CSS (utility-first styling)
- 🔧 JavaScript (ES6+)
- 💡 Optional: Framer Motion for animations

## 📸 Screenshots

### 🏠 Home Page  
![Home Page](sampleimage/sample1.png)
![Home Page](sampleimage/sample2.png)

### 🧰 other section  
![Section](sampleimage/sample3.png)
![Section](sampleimage/sample4.png)
![Section](sampleimage/sample5.png)
![Section](sampleimage/sample6.png)
![Section](sampleimage/sample7.png)

## ✨ Features

- Responsive and mobile-friendly design
- Easy customization of content and sections
- Project and skill sections configured via simple data files
- Smooth navigation and clean layout
- Deployed and optimized using Vite

## 🛠️ Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/react-vite-portfolio.git
   cd react-vite-portfolio
   ````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Customize your content**

   * Update `/src/data/projects.js` with your projects
   * Update `/src/data/skills.js` with your tech stack
   * Modify `/src/components` and `/src/pages` for layout or section changes

## 🏗️ Build for Production

```bash
npm run build
```

## 📤 Deploying

You can deploy the site using platforms like:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* [GitHub Pages](https://pages.github.com/) (with additional config)

## 📬 Contact

Feel free to connect with me through the Contact section on the site or via [LinkedIn](https://linkedin.com/in/codewithkinu) or [Email](mailto:codeithkinu@gmail.com).

---

**Made with ❤️ by Sahil  using React, Vite & Tailwind CSS**


## 📬 here is privious homepage.. -----
 ```bash
import { ArrowDown, MousePointerClick, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-background via-background/80 to-primary/5"
      ref={ref}
    >
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 10 + 2 + 'px',
              height: Math.random() * 10 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="container max-w-5xl mx-auto text-center z-10">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <motion.div 
              className="text-lg md:text-xl font-mono text-primary mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="h-4 w-4" />
              Full Stack Developer
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            variants={itemVariants}
          >
            <span className="inline-block">I'm</span>
            <motion.span 
              className="text-primary inline-block ml-3 relative"
              variants={itemVariants}
            >
              Sahil
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-primary w-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </motion.span>

          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light"
            variants={itemVariants}
          >
            Crafting <span className="text-primary font-medium">digital experiences</span> that blend beautiful design with <span className="text-secondary font-medium">cutting-edge technology</span> to solve real-world problems.
          </motion.p>

          <motion.div 
            className="pt-8 flex flex-col sm:flex-row justify-center gap-6"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="relative cosmic-button group overflow-hidden px-8 py-4 rounded-full font-medium text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ boxShadow: "0 0 0 0px rgba(99, 102, 241, 0.5)" }}
              animate={{ boxShadow: "0 0 0 10px rgba(99, 102, 241, 0)" }}
              transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
            >
              <span className="relative z-10">Explore My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
            </motion.a>
            
            <motion.a 
              href="#contact" 
              className="relative outline-button group overflow-hidden px-8 py-4 rounded-full font-medium text-lg border-2 border-primary/50 hover:border-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </span>
              <span className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"></span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Tech stack floating badges */}
      <motion.div 
        className="absolute left-8 bottom-1/3 hidden lg:flex flex-col gap-4 items-start"
        variants={floatingVariants}
        animate="float"
      >
        {['React', 'Node.js', 'TypeScript', 'Java', 'MongoDB'].map((tech, i) => (
          <motion.div 
            key={tech}
            className="px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-full text-sm shadow-sm"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1 + i * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="absolute right-8 top-1/3 hidden lg:flex flex-col gap-4 items-end"
        variants={floatingVariants}
        animate="float"
      >
        {['Express', 'Next.js', 'PostgreSQL', 'Tailwind', 'Docker'].map((tech, i) => (
          <motion.div 
            key={tech}
            className="px-4 py-2 bg-background/80 backdrop-blur-sm border rounded-full text-sm shadow-sm"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2 + i * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [0, 10, 0, -10],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 0.5,
          ease: "easeInOut"
        }}
      >
        <span className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
          <MousePointerClick className="h-3 w-3" /> Scroll to explore
        </span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.div>

      {/* Animated gradient background elements */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-purple-500 blur-[100px] opacity-30"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-secondary to-pink-500 blur-[120px] opacity-30"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-60 h-60 rounded-full bg-gradient-to-r from-accent to-blue-500 blur-[90px] opacity-30"
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </motion.div>
    </section>
  );
};
   ```
