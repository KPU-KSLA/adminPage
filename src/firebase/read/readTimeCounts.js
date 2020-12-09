import firebase from 'firebase'

async function readTimeCounts ({ studentNumber, timeCount, lectureRoom }) {
  const database = firebase.database()
  const ref = database
    .ref('lectureRoom')
    .child(lectureRoom)
    .child('timeCount')
  const children = ref.child()
  const values = await children.once('value')
  const res = []
  values.forEach(obj => res.push(obj.key))
  return res
}

export default readTimeCounts
