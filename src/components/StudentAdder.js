import React, { useState } from 'react'
import createStudent from '../firebase/create/createStudent'
import PropTypes from 'prop-types'

function StudentAdder ({ lectureRoom, timeCount }) {
  const [studentNumber, setStudentNumber] = useState('')
  const [isFocus, setFocus] = useState(false)

  const focus = (bool) => {
    setFocus(bool)
  }
  if (!isFocus) {
    return (
        <div>
            <button className="btn btn-success" onClick={() => focus(true)}>학생 추가</button>
        </div>
    )
  }

  const handleStudentChange = (e) => {
    setStudentNumber(e.target.value)
  }
  const add = () => {
    console.log({ lectureRoom, timeCount, studentNumber })
    createStudent({ lectureRoom, timeCount, studentNumber })
    focus(false)
  }

  return (
    <div>
        <span>학생 추가</span>
        <input type="number" onChange={e => handleStudentChange(e)}></input>
        <button className="btn btn-primary" onClick={() => add()}>확인</button>
        <button className="btn btn-dark" onClick={() => focus(false)}>취소</button>
    </div>
  )
}

StudentAdder.propTypes = {
  lectureRoom: PropTypes.string,
  timeCount: PropTypes.number
}

export default StudentAdder
