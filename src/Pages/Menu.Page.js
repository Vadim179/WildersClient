/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useIO } from 'Contexts'

import WildersLogo from 'Assets/WildersLogo.svg'
import './Menu.scss'

const MAX_USERNAME_LENGTH = 25

function MenuPage() {
  const c = 'main-menu'

  const socket = useIO()
  const history = useHistory()

  const [username, setUsername] = useState('')
  const [roomID, setRoomID] = useState('')
  const [rooms, setRooms] = useState([])

  function doUpdateUsername(username) {
    if (username.length <= MAX_USERNAME_LENGTH) {
      setUsername(username)
    }
  }

  function getRandomUsername() {
    return 'Player #' + Math.floor(Math.random() * 10000)
  }

  function doJoinRoom() {
    const _username = username || getRandomUsername()
    sessionStorage.setItem('username', _username)
    sessionStorage.setItem('roomID', roomID)
    history.push('/' + roomID)
  }

  useEffect(() => {
    socket.emit('get rooms')
    socket.once('rooms', rooms => {
      setRooms(rooms)
      setRoomID(rooms[0])
    })
  }, [])

  return (
    <div className={c}>
      <img
        src={WildersLogo}
        className={`${c}__logo`}
        alt="logo"
      />
      <div className={`${c}__user-menu`}>
        <input
          value={username}
          onChange={e => doUpdateUsername(e.target.value)}
          className={`${c}__user-menu-username-input`}
          placeholder="Enter your name..."
        />
        <select
          value={roomID}
          onChange={e => setRoomID(e.target.value)}
          className={`${c}__user-menu-rooms-select`}
        >
          {rooms.map(room => (
            <option key={room} value={room}>
              {room}
            </option>
          ))}
        </select>
        <button
          onClick={doJoinRoom}
          className={`${c}__user-menu-join-button`}
        >
          Join
        </button>
      </div>
    </div>
  )
}

export default MenuPage
