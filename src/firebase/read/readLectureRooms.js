import firebase from 'firebase'

async function readLectureRooms ({ studentNumber, timeCount, lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
  const children = ref.child()
  const values = await children.once('value')
  const res = []
  values.forEach(obj => res.push(obj.key))
  return res
}

export default readLectureRooms
