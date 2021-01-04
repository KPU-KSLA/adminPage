import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import readTimeCounts from '../firebase/read/readTimeCounts'
import TimeCount from './TimeCount'
import TimeCountAdder from './TimeCountAdder'
import firebase from 'firebase'

function LectureRoom ({ lectureRoom }) {
  const [timeCounts, setTimeCounts] = useState([])
  console.log('LR', lectureRoom)

  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')

  useEffect(() => {
    async function updateTimeCounts () {
      const updated = await readTimeCounts({ lectureRoom })
      setTimeCounts(updated)
    }
    ref.on('value', (_) => updateTimeCounts())
    return () => {
      ref.off()
    }
  }, [])
  const resultComponents = timeCounts.map(timeCount =>
        <div key={lectureRoom + timeCount}>
          <TimeCount lectureRoom={lectureRoom} timeCount={ timeCount }/>
        </div>)
  return (
    <div>
      <p className="h2">{lectureRoom} 강의실:</p>
      {resultComponents}
      <TimeCountAdder lectureRoom={ lectureRoom } />
    </div>
  )
}

LectureRoom.propTypes = {
  timeCount: PropTypes.number,
  lectureRoom: PropTypes.string
}

export default LectureRoom
