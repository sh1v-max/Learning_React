import { useState, useEffect } from 'react'

const useOnlineStatus = () => {
  const[onlineStatus, setOnlineStatus] = useState(true)

  // check if online
  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false)
    })
    
    window.addEventListener('online', () => {
      setOnlineStatus(true)
    })
  }, []) // dependency array to make sure it runs only once

  // boolean value
  return onlineStatus
}

export default useOnlineStatus

//! creating custom hook to check if user is online/offline
// we will be using addEventListener... window's online and offline events