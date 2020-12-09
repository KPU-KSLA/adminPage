import firebase from 'firebase'

function createLectureRoom (lectureRoom) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
  ref.set(lectureRoom)
}

export default createLectureRoom
