import React, { useEffect, useState } from 'react'
import readLectureRooms from '../firebase/read/readLectureRooms'
import LectureRoom from './LectureRoom'
import LectureRoomAdder from './LectureRoomAdder'
import firebase from 'firebase'

function ManageStudents () {
  const [lectureRooms, setLectureRooms] = useState([])

  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')

  useEffect(() => {
    async function updateTimeCounts () {
      const updated = await readLectureRooms()
      console.log(updated)
      setLectureRooms(updated)
    }
    ref.on('value', (_) => updateTimeCounts())
    return () => {
      ref.off()
    }
  }, [])
  const resultComponents = lectureRooms.map(lectureRoom =>
    <div key={lectureRoom}>
      <LectureRoom lectureRoom={lectureRoom} />
    </div>)
  return <div>
    <LectureRoomAdder />
    {resultComponents}
  </div>
}

export default ManageStudents
