/** @format */

import { createContext, useState } from "react";
import "./assets/css/App.css";
import Header from "./components/header/Header";
import Home from "./view/home/Home";
export const darkMode = createContext(false);
export const darkModeDispatch = createContext(false);
function App() {
  const [state, setState] = useState(false);
  return (
    <darkMode.Provider value={state}>
      <darkModeDispatch.Provider value={setState}>
        <div className={`wrapper ${state ? "dark" :"" }`}>
          <Header />
          <div className='App flex-ap'>
            <Home />
          </div>
        </div>
      </darkModeDispatch.Provider>
    </darkMode.Provider>
  );
}

export default App;
