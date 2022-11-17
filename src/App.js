import React from "react"
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          
        </Switch>
      </Router>
    </>
  )
}

export default App
