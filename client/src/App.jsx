import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {!welcomeComplete ? (
        <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;