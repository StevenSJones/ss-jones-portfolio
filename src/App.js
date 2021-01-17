import React from "react";
import "./App.css";
import About from "./components/About";
import NavigationHeader from "./components/NavigationHeader";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavigationHeader />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;

// function App() {
//   return <tick/>;
//   }

//   export default App;
