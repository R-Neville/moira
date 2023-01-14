import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import ThemeProvider from "./context-providers/ThemeProvider";

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
            height: "100%",
            margin: "0",
          }}
        >
          <Header />
          {menuActive && <Menu />}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
