import firebase from 'firebase'

function createStudent ({ studentNumber, timeCount, lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
    .child(studentNumber)
  ref.set({
    stdNum: studentNumber
  })
}

export default createStudent
