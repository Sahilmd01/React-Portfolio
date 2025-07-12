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
    }, 5000);

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
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Welcome Screen */}
      <motion.div
        className="h-full w-full flex items-center justify-center p-4"
        style={{ backgroundColor: currentColors.background }}
        variants={containerVariants}
        initial="hidden"
        animate={exitAnimation ? "exit" : "visible"}
      >
        {/* Animated background elements - scaled down for mobile */}
        <motion.div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full blur-[50px] md:blur-[100px]"
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
            className="absolute top-1/3 right-1/4 w-36 h-36 md:w-72 md:h-72 rounded-full blur-[60px] md:blur-[120px]"
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

        <div className="w-full max-w-2xl mx-auto text-center px-4">
          <motion.div className="space-y-4 md:space-y-8">
            {phase >= 0 && (
              <motion.div variants={contentVariants}>
                <motion.div 
                  className="text-sm md:text-lg lg:text-xl font-mono mb-2 md:mb-4 inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 rounded-full border"
                  style={{
                    color: currentColors.primary,
                    backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                    borderColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
                  {welcomeMessages[phase % welcomeMessages.length]}
                </motion.div>
              </motion.div>
            )}

            {phase >= 1 && (
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight"
                style={{ color: currentColors.primary }}
                variants={contentVariants}
              >
                <span className="inline-block">Hello</span>
                <motion.span 
                  className="inline-block ml-2 sm:ml-3 relative"
                  style={{ color: currentColors.secondary }}
                  variants={contentVariants}
                >
                  There !
                  <motion.span 
                    className="absolute -bottom-1 sm:-bottom-2 left-0 h-0.5 sm:h-1 w-full"
                    style={{ backgroundColor: currentColors.secondary }}
                    variants={underlineVariants}
                  />
                </motion.span>
              </motion.h1>
            )}

            {phase >= 2 && (
              <motion.div 
                className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
                style={{ color: currentColors.muted }}
                variants={contentVariants}
              >
                <motion.div 
                  className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-mono flex justify-center items-center"
                  style={{ color: currentColors.link }}
                >
                  {typedText}
                  {phase >= 2 && (
                    <motion.span 
                      className="ml-0.5 h-4 sm:h-5 md:h-6 w-0.5 sm:w-1 inline-block"
                      style={{ backgroundColor: currentColors.link }}
                      variants={cursorVariants}
                      animate="blinking"
                    />
                  )}
                </motion.div>
                <motion.p 
                  className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base"
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
                className="pt-4 sm:pt-6 md:pt-8"
                variants={contentVariants}
              >
                <motion.div 
                  className="h-1 sm:h-2 w-16 sm:w-20 rounded-full mx-auto"
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
                  className="mt-2 sm:mt-4 text-xs sm:text-sm opacity-70"
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