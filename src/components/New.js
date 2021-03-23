import React from 'react'
import PropTypes from 'prop-types'

const New = ({newItem}) => {
  const {source, description, title, url, urlToImage} = newItem

  const imgSrc = (urlToImage ?
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
    :
    null
  )
  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {imgSrc}
        <div className="card-content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn"
          >
            Read full new
          </a>
        </div>
      </div>
    </div>
  )
}

New.propTypes = {
  newItem: PropTypes.object.isRequired
}

export default New
