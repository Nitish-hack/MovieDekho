import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>

      <nav className="navbar navbar-expand-lg  navbar-box">
        <div className="d-flex container-fluid  py-1 px-3 ">



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
            
            <li className="nav-item dropdown dropdown-hover mx-4">
        <button className="btn btn-secondary dropdown-toggle fs-4 text-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">Rated </button>
        <ul className="dropdown-menu">
        <li><Link to="/toprated/all/all" className="dropdown-item ">All</Link></li>
                <li><Link to="/toprated/IN/hi" className="dropdown-item">India</Link></li>
                <li><Link to="/toprated/KR/ko" className="dropdown-item">korea</Link></li>
                <li><Link to="/toprated/JP/ja" className="dropdown-item">Japan</Link></li>
                <li><Link to="/toprated/US/en" className="dropdown-item">US</Link></li>
        </ul>
      </li>





      

          </ul>


          <Link className="navbar-brand nav-logo  " to="/">MovieDekho</Link>


        </div>
      </nav>

      <ul className=" d-flex nav-scroll py-3 ">


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