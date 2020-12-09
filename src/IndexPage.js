import React from 'react'
import PropTypes from 'prop-types'
import Jumbo from './Jumbo'

function IndexPage (props) {
  const isSigned = props?.isSigned ?? false
  const content = isSigned ? '내비바를 선택해 주세요.' : '로그인해 주세요.'
  return (
    <div>
        <Jumbo content="KPU 출석관리 어드민 페이지"></Jumbo>
        <p className="text-center">{content}</p>
    </div>
  )
}

IndexPage.propTypes = {
  isSigned: PropTypes.bool
}

export default IndexPage
