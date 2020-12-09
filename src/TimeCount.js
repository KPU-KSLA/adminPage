import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import readStudents from './firebase/read/readStudents'
import Student from './Student'

function TimeCount ({ timeCount, lectureRoom }) {
  console.log('TC', timeCount)
  console.log('TC:LR', lectureRoom)
  const [students, setStudents] = useState([])
  async function updateStudents () {
    const updatedObj = await readStudents({ timeCount, lectureRoom })
    const updated = updatedObj.map(e => e.studentNumber)
    console.log('updated', updated)
    setStudents(updated)
  }
  useEffect(() => updateStudents(), [])
  const resultComponents = students.map(studentNumber =>
        <div key={lectureRoom + timeCount + studentNumber}>
          <Student studentNumber={ studentNumber } />
        </div>)
  return (
    <div>
        <p className="h2">{timeCount} 교시:</p>
          {resultComponents}
    </div>
  )
}

TimeCount.propTypes = {
  timeCount: PropTypes.number,
  lectureRoom: PropTypes.string
}

export default TimeCount
