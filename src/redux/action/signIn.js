const SIGNIN = 'SIGNIN'

function signIn (page) {
  return {
    type: SIGNIN,
    isSignIn: true
  }
}

export { signIn as default, SIGNIN }
