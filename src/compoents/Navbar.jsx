import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav  ms-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    <div className="cart">
    <i class="fa-solid fa-cart-plus"></i>  
    hamed
    </div>
 
  </div>
</nav>

    </>
  )
}

export default Navbar
