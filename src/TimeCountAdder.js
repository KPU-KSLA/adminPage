import React, { useState } from 'react'
import createTimeCount from './firebase/create/createTimeCount'
import PropTypes from 'prop-types'

function TimeCountAdder ({ lectureRoom }) {
  const [timeCount, setTimeCount] = useState(0)
  const [isFocus, setFocus] = useState(false)

  const focus = (bool) => {
    setFocus(bool)
  }
  if (!isFocus) {
    return (
        <div>
            <button className="btn btn-success" onClick={() => focus(true)}>교시 추가</button>
        </div>
    )
  }

  const handleTimeCountChange = (e) => {
    setTimeCount(e.target.value)
  }
  const maxTimeCount = 24
  const add = () => {
    if (timeCount <= 0 || timeCount > maxTimeCount) {
      alert('입력값이 올바르지 않습니다.')
      return
    }
    createTimeCount({ lectureRoom, timeCount })
    focus(false)
  }

  return (
    <div>
        <span>교시 추가</span>
        <input type="number" min="0" max="24" onChange={e => handleTimeCountChange(e)}></input>
        <button className="btn btn-primary" onClick={() => add()}>확인</button>
        <button className="btn btn-dark" onClick={() => focus(false)}>취소</button>
    </div>
  )
}

TimeCountAdder.propTypes = {
  lectureRoom: PropTypes.string
}

export default TimeCountAdder
