import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import PropTypes from 'prop-types'
import IndexPage from './IndexPage'

function Login ({ isSigned, setIsSigned, uiConfig }) {
  console.log(uiConfig)
  if (isSigned) {
    return (<IndexPage isSigned={isSigned} />)
  }
  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  )
}

Login.propTypes = {
  isSigned: PropTypes.bool,
  setIsSigned: PropTypes.func,
  uiConfig: PropTypes.object
}

export default Login
