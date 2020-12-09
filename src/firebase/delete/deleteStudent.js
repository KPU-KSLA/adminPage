import firebase from 'firebase'

function deleteStudent ({ studentNumber, timeCount, lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
    .child(studentNumber)
  ref.remove()
}

export default deleteStudent
