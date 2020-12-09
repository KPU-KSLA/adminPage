import PropTypes from 'prop-types'
import React from 'react'

function StudentAttendance ({ key, day, timeCount, studentNumber }) {
  return (
        <div key={key}>
      <p key={key}>{day}일</p>
      <p key={key}>{timeCount}교시</p>
      <p key={key}>학번: {studentNumber}</p>
      <p key={key}>출석</p>
        </div>
  )
}

StudentAttendance.propTypes = {
  key: PropTypes.string,
  day: PropTypes.number,
  timeCount: PropTypes.number,
  studentNumber: PropTypes.string
}

export default StudentAttendance
