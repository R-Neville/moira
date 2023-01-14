import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import ThemeProvider from "./context-providers/ThemeProvider";
import HomePage from "./components/home-page/HomePage";

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
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
