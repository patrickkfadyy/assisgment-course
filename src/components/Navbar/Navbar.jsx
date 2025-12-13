import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark main-color py-4 fixed-top">
        <div className="container">
          {/* Brand */}
          <NavLink className="navbar-brand fw-bold fs-2" to="/">Start Framework</NavLink>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <NavLink className="nav-link  text-white text-uppercase fw-bold mt-3 px-2 rounded-3" aria-current="page" to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text-white text-uppercase fw-bold mt-3 px-2 rounded-3" to="portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link  text-white text-uppercase fw-bold mt-3 px-2 rounded-3" to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
