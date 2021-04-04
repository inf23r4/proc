import React, { useState, useEffect }from "react"
import Cover from "./components/cover";
import "./App.css"
import Navbar from "./components/navbar"


function App() {

  const [scrollHeingt, setscrollHeingt] = useState (0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setscrollHeingt(position)
  };

  useEffect(() =>{
    window.addEventListener ("scroll", handleScroll);
  },[scrollHeingt])


  return (
    <div className="App">
      <Navbar isScrolling = {scrollHeingt}/>
      <Cover/>
    </div>
  )

}

export default App;
