import React from 'react';
import "./App.css";
import Simpsons from "./components/Simpsons"


const bart =
{
    firstName: "Bart",
    lastName: "Simpson",
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
}
const homer =
{
    firstName: "Homer",
    lastName: "Simpson",
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png"
};

function App() {
  return (
    <div className="App">
    <Simpsons {...bart}/>
    <Simpsons {...homer}/>
    </div>
  );
}

export default App;
