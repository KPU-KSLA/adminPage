import React from 'react'
import PropTypes from 'prop-types'
import GetInput from './GetInput'

const RouterGenerator = (callback, notSignedInText, jumboText, noInput = false) => {
  function generated ({ isSigned }) {
    return <GetInput noInput={ noInput } isSigned={isSigned} callback={args => callback(args)} jumboText={ jumboText } notSignedInText={ notSignedInText }/>
  }
  generated.propTypes = {
    isSigned: PropTypes.bool
  }
  return generated
}

export default RouterGenerator
