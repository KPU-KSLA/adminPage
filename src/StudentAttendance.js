import PropTypes from 'prop-types'
import React from 'react'

function StudentAttendance ({ key, day, timeCount, studentNumber }) {
  return (
    <div key={key} className="card w-auto">
      <div className="card-body text-center">
        <p className="lead">{studentNumber}번 학생</p>
      </div>
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
