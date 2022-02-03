import ReactDOM from 'react-dom'
import App from './App'

import { ContextProvider } from 'Contexts'
import './index.scss'

window.addEventListener('beforeunload', () => {
  return 'Are you sure you want to exit the game?'
})

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
)
