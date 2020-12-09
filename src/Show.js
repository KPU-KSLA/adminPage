import React from 'react'
import PropTypes from 'prop-types'
import GetInput from './GetInput'
import ShowStudents from './ShowStudents'

// Role as Router

function Show ({ isSigned }) {
  const notSignedInText = '출석현황을 보기 위해서는 로그인해야 합니다.'
  const callback = ({ timeCount, lectureRoom }) => {
    return <ShowStudents timeCount={timeCount} lectureRoom={ lectureRoom } />
  }

  return <GetInput isSigned={isSigned} callback={args => callback(args)} notSignedInText={ notSignedInText }/>
}

Show.propTypes = {
  isSigned: PropTypes.bool
}

export default Show
