import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg  navbar-box">
        <div className="d-flex container-fluid  py-1 px-3 ">

        <Link className="navbar-brand nav-logo  " to="/">MovieDekho</Link>

          <ul className="navbar-nav menu px-4  nav-scroll">

            <li className="nav-item navigations mx-4">
              <Link className="nav-link active text-center" to="/"><i className="bi bi-house icons"></i></Link>
              <p className='text-white navDisplaynone m-0 text-center '>Home</p>
            </li>

            <li className="nav-item navigations mx-4">
              <Link className="nav-link active text-center" to="/trending"><i className="bi bi-lightning-charge icons"></i></Link>
              <p className='text-white navDisplaynone m-0 text-center '>Trending</p>
            </li>

            

            <li className="nav-item navigations ">
              <Link className="nav-link active text-center" to="/"><i className="bi bi-collection icons "></i></Link>
              <p className='text-white navDisplaynone m-0 text-center'>Collections</p>
            </li>
            <li className="nav-item navigations mx-4">
              <Link className="nav-link active text-center" to="#"><i className="bi bi-person icons "></i></Link>
              <p className='text-white navDisplaynone m-0 text-center'>Account</p>
            </li>
            <li className="nav-item navigations mx-4">
              <Link className="nav-link active text-center" to="#"><i className="bi bi-search icons "></i></Link>
              <p className='text-white navDisplaynone m-0 text-center'>Search</p>
            </li>
            
           





      

          </ul>
          
          <div className="nav-item dropdown dropdown-hover d-menu">
        <button className="btn btn-secondary dropdown-toggle fs-4 text-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">Rated </button>
        <ul className="dropdown-menu ">
        
              <li ><Link className="dropdown-item" to="/toprated/all/all">All</Link></li>
              <li ><Link className="dropdown-item" to="/toprated/IN/hi" >India</Link></li>
              <li ><Link className="dropdown-item" to="/toprated/KR/ko" >korea</Link></li>
              <li ><Link className="dropdown-item" to="/toprated/JP/ja">Japan</Link></li>
              <li ><Link className="dropdown-item" to="/toprated/US/en">US</Link></li>
      
        </ul>
      </div>

         


        </div>
      </nav>

      <ul className=" d-flex nav-scroll py-3 ">


        <li className="nav-item fs-5 mx-4 genre"><Link to="/mystery" className="nav-link active text-white">Mystery</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/comedy" className="nav-link active text-white">Comedy</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/horror" className="nav-link active text-white">Horror</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/action" className="nav-link active text-white">Action</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/scifi" className="nav-link active text-white text-nowrap">Sci-Fi</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/romance" className="nav-link active text-white">Romance</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/animation" className="nav-link active text-white">Animation</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/adventure" className="nav-link active text-white">Adventure</Link></li>
        <li className="nav-item fs-5 mx-4 genre"><Link to="/adventure" className="nav-link active text-white">Drama</Link></li>

      </ul>
    </div>

  )
}

export default Navbar