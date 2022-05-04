import React, { useEffect } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Meeting from './Meeting'
import History from './History'

import { checkAuth } from '../actions/auth'

function App () {
  const auth = useSelector(reduxState => reduxState.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <div className="container has-text-centered">

      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">$how Me The Money</h1>
          </Link>
          <Nav />
        </div>
      </div>

      <div className=''>
        <Routes>
          <Route path="/" element={auth.isAuthenticated ? <></> : <Navigate to='/login' />} />

          {!auth.isAuthenticated && <Route path="/login" element={<Login />}/>}
          {!auth.isAuthenticated && <Route path="/register" element={<Register />} />}

          {auth.isAuthenticated && <Route path="/meeting" element={<Meeting />} />}
          {auth.isAuthenticated && <Route path="/history" element={<History />} />}
        </Routes>
      </div>

    </div>
  )
}

export default App
