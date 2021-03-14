import React from 'react'
import New from './New'

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

export default ListNews
