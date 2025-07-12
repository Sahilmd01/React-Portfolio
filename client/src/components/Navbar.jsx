import { useEffect, useState } from "react";
import { 
  Home, 
  User, 
  Code, 
  Briefcase, 
  MessageSquare, 
  Mail, 
  BookOpen,
  Sun, 
  Moon
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
  { name: "Blog", href: "https://blogni.vercel.app", icon: BookOpen },
];

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    setIsDarkMode(newMode);
  };

  if (!isMounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      title="Toggle theme"
      aria-label="Toggle theme"
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        "bg-gray-200 dark:bg-gray-700",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      )}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg absolute left-1 top-1"
        animate={{ x: isDarkMode ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <div className="absolute inset-0 flex items-center justify-between px-1 text-[10px] text-gray-600 dark:text-gray-300">
        <Sun className="w-3.5 h-3.5" />
        <Moon className="w-3.5 h-3.5" />
      </div>
    </motion.button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);

      // Active section detection
      const sections = navItems.map(item => item.href);
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-4 md:bottom-4 md:top-auto md:left-1/2 md:-translate-x-1/2 z-50 flex justify-center",
        "transition-transform duration-300",
        showNavbar ? "translate-y-0" : "-translate-y-full md:translate-y-full"
      )}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg p-2 border border-gray-200 dark:border-gray-700">
        <div className="flex space-x-1 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "p-2 rounded-full transition-colors flex flex-col items-center",
                activeSection === item.href
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              )}
              aria-label={item.name}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1 hidden md:block">{item.name}</span>
            </a>
          ))}
          <div className="flex items-center px-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
