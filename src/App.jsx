import { useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page/Page";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <Page />
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
