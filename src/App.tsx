import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import ThemeProvider from "./context-providers/ThemeProvider";
import HomePage from "./components/home-page/HomePage";
import LoginPage from "./components/login-page/LoginPage";
import RegisterPage from "./components/register-page/RegisterPage";
import AboutPage from "./components/about-page/AboutPage";
import FAQsPage from "./components/faqs-page/FAQsPage";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const onToggleMenuActive = (event: CustomEvent) => {
      const { active } = event.detail;
      setMenuActive(active);
    };

    document.addEventListener(
      "toggle-menu-active",
      onToggleMenuActive as EventListener
    );

    return () => {
      document.removeEventListener(
        "toggle-menu-active",
        onToggleMenuActive as EventListener
      );
    };
  }, [menuActive]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div
          style={{
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            padding: "0",
            width: "100%",
            minHeight: "100vh",
            margin: "0",
          }}
        >
          <Header />
          {menuActive && <Menu />}
          <main
            style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}
          >
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faqs" element={<FAQsPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
