import React from "react";
import HelloReact from "./components/HelloReact";
import Enjoy from "./components/IEnjoy";



function App() {
  return (
    <>
      <HelloReact name="Steven"/> 
      <Enjoy fav1="hockey" fav2="skateboarding" fav3="drawing" />
      <HelloReact name="GeOvonni"/> 
      <Enjoy fav1="gaming" fav2="chillin" fav3="girls" />
      <HelloReact name="Shayla"/> 
      <Enjoy fav1="biking" fav2="binging" fav3="reading" />
    </>
  );
}

export default App;

// function App() {
//   return <tick/>;
//   }

//   export default App;
