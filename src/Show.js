import React from 'react'
import PropTypes from 'prop-types'
import Jumbo from './Jumbo'

function Show ({ isSigned }) {
  const content = isSigned ? '1234' : '출석현황을 보기 위해서는 로그인해야 합니다.'
  const renderedJumbo = <Jumbo content="KPU 출석현황 페이지"></Jumbo>
  return (
    <div>
      {renderedJumbo}
        <p className="text-center">{content}</p>
    </div>
  )
}

Show.propTypes = {
  isSigned: PropTypes.bool
}

export default Show
