import { BrowserRouter } from 'react-router-dom'
import { IOProvider } from './IO.Context'

export { useIO } from './IO.Context'

export function ContextProvider({ children }) {
  return (
    <BrowserRouter>
      <IOProvider>{children}</IOProvider>
    </BrowserRouter>
  )
}
