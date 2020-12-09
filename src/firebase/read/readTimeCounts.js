import firebase from 'firebase'

async function readTimeCounts ({ lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
  const values = await ref.once('value')
  const res = []
  values.forEach(obj => res.push(obj.key))
  return res
}

export default readTimeCounts
