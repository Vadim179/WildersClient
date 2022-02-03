import { Switch, Route } from 'react-router-dom'
import { GamePage, MenuPage } from 'Pages'
import { useIO } from 'Contexts'

function App() {
  const socket = useIO()
  if (socket === null) return null

  return (
    <Switch>
      <Route path="/:ID" component={GamePage} />
      <Route exact path="/" component={MenuPage} />
    </Switch>
  )
}

export default App
