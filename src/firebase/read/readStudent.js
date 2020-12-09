import firebase from 'firebase'

async function readStudent ({ studentNumber, timeCount, lectureRoom }) {
  console.log(studentNumber, timeCount, lectureRoom)
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
    .child(studentNumber)
  const value = await ref.once('value')
  const res = value.toJSON()
  console.log(res)
  return {
    studentNumber: res,
    timeCount,
    lectureRoom
  }
}

export default readStudent
