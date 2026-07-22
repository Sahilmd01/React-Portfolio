import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Analytics } from "@vercel/analytics/react"; 

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(() => {
    // Bypass welcome screen for 404 routes on initial load
    return window.location.pathname !== "/";
  });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      <BrowserRouter>
        {!welcomeComplete ? (
          <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
        ) : (
          <>
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Analytics />
          </>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;