import PropTypes from 'prop-types'
import React from 'react'
import deleteStudent from './firebase/delete/deleteStudent'

function Student ({ studentNumber, timeCount, lectureRoom }) {
  const confirmDeleteStudent = () => {
    const confirmMessage = '정말로 삭제하시겠습니까?'
    const confirmed = confirm(confirmMessage)
    if (!confirmed) {
      return
    }
    deleteStudent({ studentNumber, timeCount, lectureRoom })
  }
  return (
        <div><span>{ studentNumber }</span> <button className="btn btn-danger" onClick={() => confirmDeleteStudent()}>학생 삭제</button></div>
  )
}

Student.propTypes = {
  studentNumber: PropTypes.string,
  timeCount: PropTypes.number,
  lectureRoom: PropTypes.string
}

export default Student
