import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import readStudents from './firebase/read/readStudents'
import Student from './Student'
import StudentAdder from './StudentAdder'
import firebase from 'firebase'
import deleteTimeCount from './firebase/delete/deleteTimeCount'

function TimeCount ({ timeCount, lectureRoom }) {
  console.log('TC', timeCount)
  console.log('TC:LR', lectureRoom)
  const [students, setStudents] = useState([])
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
  useEffect(() => {
    async function updateStudents () {
      const updated = await readStudents({ timeCount, lectureRoom })
      console.log('updated', updated)
      setStudents(updated)
    }
    ref.on('value', (_) => updateStudents())
    return () => {
      ref.off()
    }
  }, [])
  const resultComponents = students.map(studentNumber =>
        <div key={lectureRoom + timeCount + studentNumber}>
          <Student studentNumber={studentNumber} lectureRoom={lectureRoom} timeCount={ timeCount } />
    </div>)

  const confirmDeleteTimeCount = () => {
    const confirmMessage = '정말로 삭제하시겠습니까?'
    const confirmed = confirm(confirmMessage)
    if (!confirmed) {
      return
    }
    deleteTimeCount({ timeCount, lectureRoom })
  }
  return (
    <div>
      <div>
      <p className="h3">{timeCount} 교시 학생 목록:</p>
        <button className="btn btn-danger" onClick={() => confirmDeleteTimeCount()}>교시 삭제</button>
      </div>

      {resultComponents}
      <StudentAdder timeCount={timeCount} lectureRoom={ lectureRoom } />
    </div>
  )
}

TimeCount.propTypes = {
  timeCount: PropTypes.number,
  lectureRoom: PropTypes.string
}

export default TimeCount
