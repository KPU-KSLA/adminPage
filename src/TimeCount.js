import React, { useState } from 'react'
import PropTypes from 'prop-types'
import readStudents from './firebase/read/readStudents'
import Student from './Student'

function TimeCount ({ timeCount, lectureRoom }) {
  const [students, setStudents] = useState([])
  async function updateStudents () {
    const updated = await readStudents({ timeCount, lectureRoom })
    setStudents(updated)
  }
  updateStudents()
  const resultComponents = students.map(({ studentNumber }) =>
        <div key={lectureRoom + timeCount + studentNumber}>
          <Student studentNumber={ studentNumber } />
        </div>)
  return (
    <div>
        <p className="h2">{lectureRoom} 강의:</p>
          {resultComponents}
    </div>
  )
}

TimeCount.propTypes = {
  timeCount: PropTypes.number,
  lectureRoom: PropTypes.string
}

export default TimeCount
