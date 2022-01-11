import React from "react"
import { Switch, Route } from "react-router-dom"
import { GamePage, MenuPage } from "Pages"

function App() {
  return (
    <Switch>
      <Route path="/:ID" component={GamePage} />
      <Route exact path="/" component={MenuPage} />
    </Switch>
  )
}

export default App
