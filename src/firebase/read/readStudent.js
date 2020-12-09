import firebase from 'firebase'

const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object

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
  if (isEmpty(res)) {
    return {}
  }
  return {
    studentNumber: res.stdNum,
    timeCount,
    lectureRoom
  }
}

export default readStudent
