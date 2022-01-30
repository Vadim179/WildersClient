import io from 'socket.io-client'
import {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react'

const IOContext = createContext()

export function useIO() {
  return useContext(IOContext)
}

export function IOProvider({ children }) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const URL = process.env.REACT_APP_SERVER_URL
    const _socket = io(URL)
    _socket.on('connect', () => setSocket(_socket))
    return () => _socket.off()
  }, [])

  return (
    <IOContext.Provider value={{ socket }}>
      {children}
    </IOContext.Provider>
  )
}
