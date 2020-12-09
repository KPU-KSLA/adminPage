import firebase from 'firebase'

async function readTimeCounts ({ lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
  const snapshot = await ref.once('value')
  const val = snapshot.val()
  const res = []
  for (const key in val) {
    res.push(key)
  }
  return res
}

export default readTimeCounts
