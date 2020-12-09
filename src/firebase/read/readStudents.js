import firebase from 'firebase'

async function readStudents ({ timeCount, lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
    .child(timeCount)
  const snapshot = await ref.once('value')
  const val = snapshot.val()
  const res = []
  for (const key in val) {
    if (+key === -1) {
      continue
    }
    res.push(key)
  }
  return res
}

export default readStudents
