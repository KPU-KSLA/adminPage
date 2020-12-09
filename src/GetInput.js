import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Jumbo from './Jumbo'

function GetInput ({ isSigned, callback }) {
  const notSignedInText = '출석현황을 보기 위해서는 로그인해야 합니다.'
  const renderedJumbo = <Jumbo content="KPU 출석현황 페이지"></Jumbo>

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [timeCount, setTimeCount] = useState(0)
  const [lectureRoom, setLectureRoom] = useState('')
  const handleLectureRoomChange = (e) => {
    if (e.target.value !== lectureRoom) {
      setLectureRoom(e.target.value)
      console.log(lectureRoom)
    }
  }
  const handleTimeCountChange = (e) => {
    if (e.target.value !== timeCount) {
      console.log(timeCount)
      setTimeCount(+e.target.value)
    }
  }
  const maxTimeCount = 24

  if (!isSigned) {
    return (
    <div>
      {renderedJumbo}
        <p className="text-center">{notSignedInText}</p>
    </div>
    )
  }

  const submit = () => {
    if (isSubmitted) {
      return
    }
    if ((timeCount <= 0 || timeCount > maxTimeCount) || lectureRoom === '') {
      alert('입력값이 올바르지 않습니다.')
      return
    }
    setIsSubmitted(true)
  }

  if (!isSubmitted) {
    return (
    <div>
        <p className="h2 text-center">교시와 강의실 입력</p>
      <div action="" onKeyPress={(e) => {
        if (e.key !== 'Enter') {
          return
        }
        console.log('Enter key pressed')
        submit()
      }}>
        <div className="form-group">
        <label htmlFor="lectureRoom">강의실</label>
        <input type="text" onChange={handleLectureRoomChange} className="form-control" id="lectureRoom" name="강의실" placeholder="E513" />
        </div>
        <div className="form-group">
          <label htmlFor="timeCount">교시</label>
          <input type="number" onChange={handleTimeCountChange} className="form-control" name="timeCount" min="0" max={maxTimeCount} placeholder="1" />
          <small id="typeOnlyNumber" className="form-text text-muted">숫자만 입력하세요.</small>
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => {
          console.log('Submit button pushed')
          submit()
        }}>제출</button>
      </div>
    </div>
    )
  }

  callback()
}

GetInput.propTypes = {
  isSigned: PropTypes.bool,
  submit: PropTypes.func
}

export default GetInput
