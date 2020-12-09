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
  const studentNumbers = []
  value.forEach(obj => {
    const studentNumber = obj.key
    studentNumbers.push(studentNumber)
  })
  const res = []
  const promises = studentNumbers.map(async (studentNumber) => {
    console.log(studentNumber)
    const result = await readStudent({ studentNumber, timeCount, lectureRoom })
    res.push(result)
  })
  await Promise.all(promises)
  return res
}

export default readStudents
