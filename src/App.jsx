import { Toaster } from "react-hot-toast";
import Experiences from "./components/Experiences";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Routers from "./router/Routers";

import "./App.css";

function App() {
  return (
    <>
      <Toaster />
      <Routers>
        {/* 
        <NavBar />
        <Home />
        <Experiences /> 
        
        */}
      </Routers>
    </>
  );
}

export default App;
