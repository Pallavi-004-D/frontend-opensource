import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <header  style={{display:"flex",justifyContent:"space-evenly",border:"solid black 1px"}}   >
  <img src='#' alt="logo" />
   
  <nav  style={{display:"flex",gap:"10px"}}>
 <Link to='/' ><a href="">Home</a></Link>
 <Link  to='/about'><a href="">About</a></Link>
 <Link to='/products' ><a href="">Products</a></Link>
 

  


   
  </nav>
    </header>
    </>
  )
}

export default Header