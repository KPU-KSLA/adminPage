import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import PropTypes from 'prop-types'
import firebase from 'firebase'

function Content ({ isSigned, setIsSigned, currentPage, uiConfig }) {
  if (!isSigned) {
    return (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    )
  } else {
    return (
      <currentPage />
    )
  }
}

Content.propTypes = {
  isSigned: PropTypes.bool,
  setIsSigned: PropTypes.func,
  currentPage: PropTypes.elementType,
  uiConfig: PropTypes.uiConfig
}

export default Content
