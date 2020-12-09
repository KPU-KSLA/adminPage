import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import firebase from 'firebase'
import Content from './Content'
import store from './redux/store'
import signIn from './redux/action/signIn'
import signOut from './redux/action/signOut'

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
    signInSuccessWithAuthResult: () => { store.dispatch(signIn()) }
  }
}

function Auth() {
  const initialSignStatus = store.getState().signReducer.isSignIn
  const [isSignedIn, setIsSignedIn] = useState(initialSignStatus) // Local signed-in state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      const signed = !!user
      if (signed) {
        store.dispatch(signIn)
      } else {
        store.dispatch(signOut)
      }
      const signStatus = store.getState().signReducer.isSignIn
      setIsSignedIn(signStatus)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])

  store.subscribe(() => {
    const signStatus = store.getState().signReducer.isSignIn
    setIsSignedIn(signStatus)
  })
  return (
    <Content isSigned={isSignedIn} setIsSigned={(e) => setIsSignedIn(e)} uiConfig={uiConfig} />
  )
}

Auth.propTypes = {
  currentPage: PropTypes.elementType
}

export default Auth
