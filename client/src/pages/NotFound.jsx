import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Code } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "404 - Page Not Found | Ayan Manna";
    return () => {
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="h-[100dvh] w-full bg-gradient-to-br from-background via-background/95 to-primary/10 flex flex-col items-center justify-center px-4 relative overflow-hidden py-4 sm:py-6 md:py-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + "px",
              height: Math.random() * 60 + 20 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              rotate: Math.random() * 360,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}

        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-2xl w-full text-center z-10 flex flex-col justify-center items-center h-full max-h-full">
        {/* 404 Code Display */}
        <motion.div
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative inline-block">
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 md:mb-4">
              404
            </div>
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-red-500 text-white text-[10px] sm:text-xs font-mono px-2 py-0.5 sm:py-1 rounded">
              Exception
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-3">
            Component Not Found
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6 max-w-sm sm:max-w-md md:max-w-lg mx-auto leading-relaxed">
            The component you&apos;re looking for is undefined. It may have been unmounted,
            garbage collected, or simply lost in the dependency tree.
          </p>
        </motion.div>

        {/* Animated Code Snippet */}
        <motion.div
          className="bg-background/80 border border-border rounded-xl p-4 sm:p-5 md:p-6 mb-4 md:mb-6 backdrop-blur-sm w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto relative overflow-hidden group"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000"></div>

          <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
            </div>
            <div className="text-xs font-mono text-muted-foreground flex-1 text-center">
              stack_trace.js
            </div>
          </div>

          <div className="font-mono text-[10px] sm:text-xs md:text-sm text-left overflow-x-auto">
            <div className="text-muted-foreground italic mb-2">{"// 404: Uncaught ReferenceError"}</div>
            <div>
              <span className="text-purple-400">try</span> <span className="text-yellow-400">{`{`}</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-400">renderPage</span>
              <span className="text-purple-400">(</span>
              <span className="text-green-400">&quot;{window.location.pathname}&quot;</span>
              <span className="text-purple-400">)</span>
              <span className="text-foreground">;</span>
            </div>
            <div>
              <span className="text-yellow-400">{`}`}</span> <span className="text-purple-400">catch</span> <span className="text-yellow-400">(</span>
              <span className="text-red-400">err</span>
              <span className="text-yellow-400">)</span> <span className="text-yellow-400">{`{`}</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-400">console</span>
              <span className="text-foreground">.</span>
              <span className="text-yellow-300">error</span>
              <span className="text-purple-400">(</span>
              <span className="text-green-400">&quot;404: Page not found&quot;</span>
              <span className="text-purple-400">)</span>
              <span className="text-foreground">;</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-400">window</span>
              <span className="text-foreground">.</span>
              <span className="text-cyan-400">location</span>
              <span className="text-foreground">.</span>
              <span className="text-blue-400">href</span>
              <span className="text-foreground"> = </span>
              <span className="text-green-400">&quot;/&quot;</span>
              <span className="text-foreground">;</span>
            </div>
            <div><span className="text-yellow-400">{`}`}</span></div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-row gap-3 justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/" className="flex-1">
            <motion.button
              className="w-full justify-center group relative overflow-hidden px-4 py-2 sm:px-5 sm:py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl flex items-center gap-2 text-xs sm:text-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>Home</span>
            </motion.button>
          </Link>

          <motion.a
            href="https://github.com/Sahilmd01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 justify-center group relative overflow-hidden px-4 py-2 sm:px-5 sm:py-3 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm flex items-center gap-2 text-xs sm:text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>GitHub</span>
          </motion.a>
        </motion.div>

        {/* Fun Status Indicator */}
        <motion.div
          className="mt-4 md:mt-6 text-[10px] sm:text-xs text-muted-foreground flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span>System operational, just lost in space</span>
        </motion.div>
      </div>
    </div>
  );
};
