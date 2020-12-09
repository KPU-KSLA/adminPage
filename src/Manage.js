import React from 'react'
import ManageStudents from './ManageStudents'
import RouterGenerator from './RouterGenerator'

const callback = () => <ManageStudents />
const Manage = RouterGenerator(callback, '출석부를 수정하기 위해서는 로그인해야 합니다.', 'KPU 출석부 관리 페이지', true)

export default Manage
