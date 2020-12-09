import PropTypes from 'prop-types'
import { createElement, useState } from 'react'
import store from './redux/store'

function Content ({ isSigned, setIsSigned, uiConfig }) {
  const initialPage = store.getState().pageReducer.page
  console.log(store.getState())
  console.log('content uiconfig', uiConfig)
  const elemProps = {
    isSigned,
    setIsSigned,
    uiConfig
  }
  const [currentPage, setCurrentPage] = useState(createElement(initialPage, elemProps))
  store.subscribe(() => {
    const page = store.getState().pageReducer.page
    console.log('page: ', page)
    setCurrentPage(createElement(page, elemProps))
  })
  return currentPage
}

Content.propTypes = {
  isSigned: PropTypes.bool,
  setIsSigned: PropTypes.func,
  uiConfig: PropTypes.uiConfig
}

export default Content
