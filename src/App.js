import React from "react"
import Cover from "./components/cover";
import Navbar from "./components/navbar"
import { Provider } from "./context/provider";


function App() {

  return (
    <Provider>
      <Navbar/>
      <Cover/>
    </Provider>
  )

}

export default App;