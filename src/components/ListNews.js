import React from 'react'
import New from './New'
import PropTypes from 'prop-types'

const ListNews = ({news}) => {
  return (
    <div className="row">
      {news.map(newsItem => (
        <New
          key={newsItem.url}
          newItem={newsItem}
        />
      )
      )}
    </div>
  )
}

ListNews.propTypes = {
  news: PropTypes.array.isRequired
}

export default ListNews
