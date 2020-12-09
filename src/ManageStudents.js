import React, { useState } from 'react'
import readLectureRooms from './firebase/read/readLectureRooms'
import LectureRoom from './LectureRoom'

function ManageStudents () {
  const [lectureRooms, setLectureRooms] = useState([])
  async function updateTimeCounts () {
    const updated = await readLectureRooms()
    setLectureRooms(updated)
  }
  updateTimeCounts()
  const resultComponents = lectureRooms.map(lectureRoom =>
    <div key={lectureRoom}>
          <LectureRoom lectureRoom={lectureRoom}/>
  </div>)
  return resultComponents
}

export default ManageStudents
