import firebase from 'firebase'

async function readLectureRooms () {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
  console.log(ref)
  const values = await ref.once('value')
  const res = []
  values.forEach(obj => res.push(obj.key))
  return res
}

export default readLectureRooms
