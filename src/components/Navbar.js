import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg  navbar-box">
        <div className="d-flex container-fluid  py-1 px-3 ">



          <ul className="navbar-nav menu px-4">
        
            <li className="nav-item">
              <Link className="nav-link active" to="/"><i className="bi bi-house icons mx-4"></i></Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/trending"><i className="bi bi-lightning-charge icons mx-4"></i></Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link active" to="/originals"><i className="bi bi-patch-check icons mx-4"></i></Link>
            </li> */}

            <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <i className="bi bi-patch-check icons mx-4"></i>
          </Link>
          <ul className="dropdown-menu toprated-menu" aria-labelledby="navbarDropdownMenuLink ">
            <li><Link to="/toprated/all/all" className="dropdown-item">All</Link></li>
            <li><Link to="/toprated/IN/hi" className="dropdown-item">India</Link></li>
            <li><Link to="/toprated/KR/ko" className="dropdown-item">korea</Link></li>
            <li><Link to="/toprated/JP/ja" className="dropdown-item">Japan</Link></li>
            <li><Link to="/toprated/US/en" className="dropdown-item">US</Link></li>
          </ul>
        </li>

            <li className="nav-item">
              <Link className="nav-link active" to="#"><i className="bi bi-collection icons  mx-4"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#"><i className="bi bi-person icons mx-4"></i></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="#"><i className="bi bi-search icons mx-4"></i></Link>
            </li>

          </ul>

         
          <Link className="navbar-brand nav-logo " to="/">MovieDekho</Link>
         


        </div>
      </nav>

      <ul className=" d-flex nav-scroll py-3">
     
        
        <li className="nav-item fs-5 mx-5"><Link to="/mystery" className="nav-link active text-white">Mystery</Link></li>
        <li className="nav-item fs-5 mx-5"><Link to="/comedy" className="nav-link active text-white">Comedy</Link></li>
        <li className="nav-item fs-5 mx-5"><Link to="/horror" className="nav-link active text-white">Horror</Link></li>
        <li className="nav-item fs-5 mx-5"><Link to="/action" className="nav-link active text-white">Action</Link></li>
        <li className="nav-item fs-5 mx-5"><Link to="/scifi" className="nav-link active text-white text-nowrap">Sci-Fi</Link></li>
        <li className="nav-item fs-5 mx-5"><Link to="/romance" className="nav-link active text-white">Romance</Link></li>  
        <li className="nav-item fs-5 mx-5"><Link to="/animation" className="nav-link active text-white">Animation</Link></li>  
        <li className="nav-item fs-5 mx-5"><Link to="/adventure" className="nav-link active text-white">Adventure</Link></li>  
        <li className="nav-item fs-5 mx-5"><Link to="/adventure" className="nav-link active text-white">Drama</Link></li>  

      </ul>
    </div>

  )
}

export default Navbar