import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";

const WelcomeScreen = ({ onWelcomeComplete }) => {
  const [phase, setPhase] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);
  const [typedText, setTypedText] = useState("");
  const { theme } = useTheme();

  // Theme-based colors
  const colors = {
    light: {
      primary: "hsl(222.2 47.4% 11.2%)",
      secondary: "hsl(262.1 83.3% 57.8%)",
      background: "hsl(0 0% 100%)",
      muted: "hsl(215.4 16.3% 46.9%)",
      link: "hsl(221.2 83.2% 53.3%)"
    },
    dark: {
      primary: "hsl(210 40% 98%)",
      secondary: "hsl(263.4 70% 50.4%)",
      background: "hsl(222.2 47.4% 11.2%)",
      muted: "hsl(215 20.2% 65.1%)",
      link: "hsl(217.2 91.2% 59.8%)"
    }
  };

  const currentColors = colors[theme] || colors.dark;
  const portfolioUrl = "sahilfullstackportfolio.netlify.app";
  const welcomeMessages = [
    "Crafting digital experiences",
    "Software Engineer",
    "Full-stack development"
  ];

  useEffect(() => {
    const phase1 = setTimeout(() => setPhase(1), 800);
    const phase2 = setTimeout(() => setPhase(2), 1600);
    const phase3 = setTimeout(() => setPhase(3), 2400);
    const complete = setTimeout(() => {
      setExitAnimation(true);
      setTimeout(onWelcomeComplete, 1000);
    }, 5000); // time delay 

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
      clearTimeout(complete);
    };
  }, [onWelcomeComplete]);

  useEffect(() => {
    if (phase >= 2) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i <= portfolioUrl.length) {
          setTypedText(portfolioUrl.substring(0, i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 40);

      return () => clearInterval(typingInterval);
    }
  }, [phase]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    },
    exit: {
      y: "-100vh",
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const contentVariants = {
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

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0
      }
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Welcome Screen */}
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: currentColors.background }}
        variants={containerVariants}
        initial="hidden"
        animate={exitAnimation ? "exit" : "visible"}
      >
        {/* Animated background elements */}
        <motion.div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px]"
            style={{ 
              background: `linear-gradient(to right, ${currentColors.primary}, ${currentColors.secondary})`
            }}
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
            className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-[120px]"
            style={{ 
              background: `linear-gradient(to right, ${currentColors.secondary}, #ec4899)`
            }}
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
        </motion.div>

        <div className="container max-w-5xl mx-auto text-center px-4">
          <motion.div className="space-y-8">
            {phase >= 0 && (
              <motion.div variants={contentVariants}>
                <motion.div 
                  className="text-lg md:text-xl font-mono mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border"
                  style={{
                    color: currentColors.primary,
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <Sparkles className="h-4 w-4" />
                  {welcomeMessages[phase % welcomeMessages.length]}
                </motion.div>
              </motion.div>
            )}

            {phase >= 1 && (
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
                style={{ color: currentColors.primary }}
                variants={contentVariants}
              >
                <span className="inline-block">Hello</span>
                <motion.span 
                  className="inline-block ml-3 relative"
                  style={{ color: currentColors.secondary }}
                  variants={contentVariants}
                >
                  There !
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-1 w-full"
                    style={{ backgroundColor: currentColors.secondary }}
                    variants={underlineVariants}
                  />
                </motion.span>
              </motion.h1>
            )}

            {phase >= 2 && (
              <motion.div 
                className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed font-light"
                style={{ color: currentColors.muted }}
                variants={contentVariants}
              >
                <p>
                  Building <span className="font-medium" style={{ color: currentColors.secondary }}>performant</span>, {' '}
                  <span className="font-medium" style={{ color: currentColors.secondary }}>scalable</span> web applications
                </p>
                <motion.div 
                  className="mt-6 text-lg md:text-xl font-mono flex justify-center items-center"
                  style={{ color: currentColors.link }}
                >
                  {typedText}
                  {phase >= 2 && (
                    <motion.span 
                      className="ml-1 h-6 w-1 inline-block"
                      style={{ backgroundColor: currentColors.link }}
                      variants={cursorVariants}
                      animate="blinking"
                    />
                  )}
                </motion.div>
                <motion.p 
                  className="mt-4 text-sm md:text-base"
                  style={{ color: currentColors.muted }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                >
                  (This is my portfolio website)
                </motion.p>
              </motion.div>
            )}

            {phase >= 3 && (
              <motion.div 
                className="pt-8"
                variants={contentVariants}
              >
                <motion.div 
                  className="h-2 w-20 rounded-full mx-auto"
                  style={{ backgroundColor: currentColors.secondary + '80' }}
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [1, 0.7, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
                <motion.p 
                  className="mt-4 text-sm opacity-70"
                  style={{ color: currentColors.muted }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Loading my best work for you...
                </motion.p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;