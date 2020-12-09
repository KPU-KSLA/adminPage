import firebase from 'firebase'

async function readLectureRooms () {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
  console.log(ref)
  const snapshot = await ref.once('value')
  const val = snapshot.val()
  const res = []
  for (const key in val) {
    res.push(key)
  }
  return res
}

export default readLectureRooms
