import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import readTimeCounts from './firebase/read/readTimeCounts'
import TimeCount from './TimeCount'

function LectureRoom ({ lectureRoom }) {
  const [timeCounts, setTimeCounts] = useState([])
  console.log('LR', lectureRoom)

  useEffect(() => {
    async function updateTimeCounts () {
      const updated = await readTimeCounts({ lectureRoom })
      setTimeCounts(updated)
    }
    updateTimeCounts()
  }, [])
  const resultComponents = timeCounts.map(timeCount =>
        <div key={lectureRoom + timeCount}>
          <TimeCount lectureRoom={lectureRoom} timeCount={ timeCount }/>
        </div>)
  return (
    <div>
        <p className="h2">{lectureRoom} 강의실:</p>
          {resultComponents}
    </div>
  )
}

LectureRoom.propTypes = {
  timeCount: PropTypes.number,
  lectureRoom: PropTypes.string
}

export default LectureRoom
