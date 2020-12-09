import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import StudentAttendance from './StudentAttendance'
import Jumbo from './Jumbo'
import readStudents from './firebase/read/readStudents'

function ShowStudents ({ lectureRoom, timeCount }) {
  const database = firebase.database()
  const [checkedStudents, setCheckedStudents] = useState([])

  useEffect(() => {
    async function getCheckedStudents () {
      const casesRef = database.ref('cases')
      const snapShot = await casesRef.once('value')
      const snapshotObjects = []
      snapShot.forEach(e => snapshotObjects.push(<ul key={e.key}>{e.toJSON()}</ul>))
      // https://stackoverflow.com/questions/42489918/async-await-inside-arraymap
      const promises = snapshotObjects.map(async (obj) => {
        const e = obj.props.children
        const userID = e.userID
        const fetched = await database.ref(`userinfos/${userID}`).once('value')
        const user = fetched.toJSON()
        const stdNum = user.stdNum
        return {
          ...obj,
          studentNumber: stdNum
        }
      })
      const result = await Promise.all(promises)
      setCheckedStudents(result)
    }
    getCheckedStudents()
  })

  const now = new Date(Date.now())

  const today = {
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDay()
  }

  const mappedCheckedStudents = checkedStudents.map(obj => {
    const e = obj.props.children
    const dateString = e.date
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    const changedMin = date.getMinutes() - 30
    date.setMinutes(changedMin)
    const qrString = e.qr
    const timeCount = date.getHours() - 9 || 1
    const studentNumber = obj.studentNumber
    return {
      qrString,
      year,
      month,
      day,
      timeCount,
      studentNumber
    }
  })

  const filtered = mappedCheckedStudents.filter(e =>
    e.year === today.year &&
        e.month === today.month &&
        e.day === today.day &&
        e.qrString === lectureRoom
  )
  const noOneRegistered = '아무도 출석하지 않았습니다!'
  const noOneExists = '출석부에 등록된 학생이 아무도 없습니다!'
  const checkedComponents = filtered.length
    ? <div>
            {filtered.map(e => <StudentAttendance key={e.key} day={e.day} timeCount={e.timeCount} studentNumber={e.studentNumber} />)}
        </div>
    : <p className="h2 text-center">{noOneRegistered}</p>
  const everyStudents = readStudents({ timeCount, lectureRoom })
  const everyComponents = everyStudents.length
    ? <div>
            {everyStudents.map(e => <StudentAttendance key={e.studentNumber} day={today.day} timeCount={timeCount} studentNumber={e.studentNumber} />)}
        </div>
    : <p className="h2 text-center">{noOneExists}</p>
  return (
      <div>
          <Jumbo content={`${lectureRoom}호 ${timeCount}교시 강의`}></Jumbo>
        <div>
          <p className="h1 text-center">출석 학생</p>
                  {checkedComponents}
        </div>
        <div>
          <p className="h1 text-center">전체 학생</p>
                  {everyComponents}
        </div>
      </div>
  )
}

ShowStudents.propTypes = {
  lectureRoom: PropTypes.string,
  timeCount: PropTypes.number
}

export default ShowStudents
