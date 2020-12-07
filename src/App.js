import React, { useState, useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBWqJzzQnNENKkOVpsOhWlITGv-Um9Y_Hc',
  authDomain: 'fir-auth-sample-page.firebaseapp.com',
  projectId: 'fir-auth-sample-page',
  storageBucket: 'fir-auth-sample-page.appspot.com',
  messagingSenderId: '973196040928',
  appId: '1:973196040928:web:b66fd30bd80805bcc94e85',
  measurementId: 'G-BLQ12S759K'
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

function Auth () {
  const [isSignedIn, setIsSignedIn] = useState(false) // Local signed-in state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
    })
    return () => unregisterAuthObserver() // Make sure we un-register Firebase observers when the component unmounts.
  }, [])
  if (isSignedIn) {
    return (
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    )
  } else {
    return (
      <Content />
    )
  }
}

function Content () {
  return (
    <span>
      Hello, signed user!
    </span>
  )
}
function App () {
  return (
    <div className="App">
      <Auth></Auth>
    </div>
  )
}

export default App
