const SIGNOUT = 'SIGNOUT'

function signOut (page) {
  return {
    type: SIGNOUT,
    isSignIn: false
  }
}

export { signOut as default, SIGNOUT }
