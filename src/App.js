import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import Auth from './Auth'
import Login from './Login'
import Navbar from './Navbar'

function App () {
  const [currentPage, setCurrentPage] = useState(Login)
  return (
    <div className="App">
      <Navbar setCurrentPage={(e) => setCurrentPage(e)} />
      <Auth currentPage={currentPage} />
    </div>
  )
}

export default App
