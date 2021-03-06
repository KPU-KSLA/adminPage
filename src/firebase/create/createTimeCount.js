import firebase from 'firebase'

function createTimeCount ({ lectureRoom, timeCount }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
  ref.set(-1)
}

export default createTimeCount
