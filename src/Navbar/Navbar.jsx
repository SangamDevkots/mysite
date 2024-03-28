import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<ul>
  <Link to='about'><li>about</li></Link>
  <Link to='/'><li>Home</li></Link>
  <Link to='/post'> Post</Link>


</ul>
  )
}

export default Navbar