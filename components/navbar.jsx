import { useRouter } from 'next/router'
import React from 'react'
const style = {
  backgroundColor: 'yellow',
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',

  height: '60px',
}
const Navbar = () => {
  const router = useRouter()
  const handleClick = (route) => {
    router.push(route)
  }
  return (
    <div style={style}>
      <button onClick={() => handleClick('/')}>Vicky Anand</button>
      <button onClick={() => handleClick('/projects')}>Projects</button>
      <button onClick={() => handleClick('/experience')}>Experience</button>
    </div>
  )
}

export default Navbar
