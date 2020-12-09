import PropTypes from 'prop-types'
import React from 'react'

function Student ({ studentNumber }) {
  return (
        <p>{ studentNumber }</p>
  )
}

Student.propTypes = {
  studentNumber: PropTypes.string
}

export default Student
