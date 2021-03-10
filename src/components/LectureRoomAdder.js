import React, { useState } from 'react'
import createLectureRoom from '../firebase/create/createLectureRoom'

function LectureRoomAdder () {
  const [lectureRoom, setLectureRoom] = useState('')
  const [isFocus, setFocus] = useState(false)

  const focus = (bool) => {
    setFocus(bool)
  }
  if (!isFocus) {
    return (
        <div>
            <button className="btn btn-success" onClick={() => focus(true)}>강의실 추가</button>
        </div>
    )
  }

  const handleLectureRoomChange = (e) => {
    setLectureRoom(e.target.value)
  }
  const add = () => {
    createLectureRoom(lectureRoom)
    focus(false)
  }

  return (
    <div>
        <span>강의실 추가</span>
        <input onChange={e => handleLectureRoomChange(e)}></input>
        <button className="btn btn-primary" onClick={() => add()}>확인</button>
        <button className="btn btn-dark" onClick={() => focus(false)}>취소</button>
    </div>
  )
}

export default LectureRoomAdder
