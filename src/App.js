import React from 'react'
import { IOProvider } from 'IO'
import { Switch, Route } from 'react-router-dom'
import { GamePage, MenuPage } from 'Pages'

function App() {
  return (
    <IOProvider>
      <Switch>
        <Route path="/:ID" component={GamePage} />
        <Route exact path="/" component={MenuPage} />
      </Switch>
    </IOProvider>
  )
}

export default App
