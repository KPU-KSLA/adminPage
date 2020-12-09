import React from 'react'
import PropTypes from 'prop-types'

function Jumbo ({ content }) {
  return (
    <div className="jumbotron page-header">
        <p className="h1 text-center">{content}</p>
    </div>
  )
}

Jumbo.propTypes = {
  content: PropTypes.string
}

export default Jumbo
