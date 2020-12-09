import firebase from 'firebase'

function deleteTimeCount ({ timeCount, lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
  ref.remove()
}

export default deleteTimeCount
