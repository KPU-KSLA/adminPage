import React from 'react'
import ShowStudents from './ShowStudents'
import RouterGenerator from './RouterGenerator'

const callback = ({ timeCount, lectureRoom }) => <ShowStudents timeCount={timeCount} lectureRoom={ lectureRoom } />
const Show = RouterGenerator(callback, '출석현황을 보기 위해서는 로그인해야 합니다.', 'KPU 출석현황 페이지')

export default Show
