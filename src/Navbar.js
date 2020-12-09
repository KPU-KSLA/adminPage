import React, { useState } from 'react'
import IndexPage from './IndexPage'
import Show from './Show'
import store from './redux/store'
import setCurrentPage from './redux/action/setCurrentPage'
import Login from './Login'
import signOut from './redux/action/signOut'
import Manage from './Manage'

function Navbar () {
  const initialSignStatus = store.getState().signReducer.isSignIn
  const [isSignedIn, setIsSignedIn] = useState(initialSignStatus) // Local signed-in state.
  const setPage = (page) => store.dispatch(setCurrentPage(page))
  const title = 'KPU 출석관리'
  store.subscribe(() => {
    const signStatus = store.getState().signReducer.isSignIn
    setIsSignedIn(signStatus)
  })
  return (
    <nav id="navbar1" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-header">
              <a className="navbar-brand" onClick={() => setPage(IndexPage)}>{title}</a>
            <button type="button" className="navbar-toggler collapsed navbar-toggler-right bg-light"
                    data-toggle="collapse" data-target="#navbar2"
                    aria-expanded="false">
                <span className="navbar-toggler-icon">TOGGLE</span>
            </button>
        </div>
        <div className="collapse navbar-collapse justify-content-end" id="navbar2">
            <ul id="navbarInner" className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => setPage(IndexPage)}>메인</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => setPage(Show)}>보기</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => setPage(Manage)}>출석부 목록 수정</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">

              <a className="nav-link" onClick={isSignedIn ? () => signOut() : () => setPage(Login)}>{ isSignedIn ? '로그아웃' : '로그인' }</a>
                </li>
            </ul>
        </div>
      </nav>
  )
}

export default Navbar
