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
    const socket = io(process.env.REACT_APP_SERVER_URL, {
      transports: ['websocket'],
    })
    socket.on('connect', () => setSocket(socket))
    return () => socket.off()
  }, [])

  return (
    <IOContext.Provider value={socket}>
      {children}
    </IOContext.Provider>
  )
}
