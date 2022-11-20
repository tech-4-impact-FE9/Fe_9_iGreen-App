import React from "react"
import Navbar from "./component/Navbar/Navbar"
import Home from "./component/Home/Home"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "./component/Footer/Footer"
import Login from "./component/Login/Login"
import Register from "./component/Register/Register"


//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' component={Home} exact>
            <Home />
          </Route>
          <Route path='/Login' component={Login} exact>
            <Login/>
          </Route>
          <Route path='/Register' component={Register} exact>
            <Register/>
          </Route>
          
          
        </Switch>
        
      </Router>
      <Footer/>
    </>
  )
}

export default App
