import React from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
import Show from './Show'
import Login from './Login'

function Navbar ({ setCurrentPage }) {
  const title = 'KPU 출석관리'
  return (
    <div className="container fill">
    <nav id="navbar1" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-header">
              <a className="navbar-brand" onClick={() => setCurrentPage(Content)}>{title}</a>
            <button type="button" className="navbar-toggler collapsed navbar-toggler-right bg-light"
                    data-toggle="collapse" data-target="#navbar2"
                    aria-expanded="false">
                <span className="navbar-toggler-icon">TOGGLE</span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbar2">
            <ul id="navbarInner" className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => setCurrentPage(Content)}>메인</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => setCurrentPage(Show)}>보기</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" onClick={() => setCurrentPage(Login)}>로그인</a>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  currentPage: PropTypes.any,
  setCurrentPage: PropTypes.func
}

export default Navbar
