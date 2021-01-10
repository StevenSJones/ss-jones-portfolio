import React from "react";
import "./App.css";
// import HelloReact from "./components/HelloReact";
// import Enjoy from "./components/IEnjoy";
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
      {/* <HelloReact name="Steven"/> 
      <Enjoy fav1="hockey" fav2="skateboarding" fav3="drawing" />
      <HelloReact name="GeOvonni"/> 
      <Enjoy fav1="gaming" fav2="chillin" fav3="girls" />
      <HelloReact name="Shayla"/> 
      <Enjoy fav1="biking" fav2="binging" fav3="reading" /> */}
    </>
  );
}

export default App;

// function App() {
//   return <tick/>;
//   }

//   export default App;
