import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import firebase from 'firebase'
import Content from './Content'

const firebaseConfig = {
  apiKey: 'AIzaSyDyXHxNWk-Jc7-oeY6upSFnOimzwWaAvMg',
  authDomain: 'attendance-management-252a2.firebaseapp.com',
  databaseURL: 'https://attendance-management-252a2.firebaseio.com',
  projectId: 'attendance-management-252a2',
  storageBucket: 'attendance-management-252a2.appspot.com',
  messagingSenderId: '744212545817',
  appId: '1:744212545817:web:99d562a0f35f0b0abf8588',
  measurementId: 'G-L357SY356S'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  }
}

function Auth ({ currentPage }) {
  const [isSignedIn, setIsSignedIn] = useState(false) // Local signed-in state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  return (
    <Content isSigned={(e) => isSignedIn(e)} setIsSigned={(e) => setIsSignedIn(e)} currentPage={currentPage} uiConfig={uiConfig} />
  )
}

Auth.propTypes = {
  currentPage: PropTypes.currentPage
}

export default Auth
