import firebase from 'firebase'
import readStudent from './readStudent'

async function readStudents ({ timeCount, lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
  const value = await ref.once('value')
  const arr = []
  value.forEach(async obj => {
    const e = obj.props.children
    const studentNumber = e.studentNumber
    const result = await readStudent({ studentNumber, timeCount, lectureRoom })
    arr.push(result)
  })
  return arr
}

export default readStudents
