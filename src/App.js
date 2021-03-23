import {useEffect, useState} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ListNews from './components/ListNews';

function App () {
  // set initial category
  const [category, saveCategory] = useState('')
  const [news, saveNews] = useState([])

  // onmount load general news
  useEffect(() => {
    const requestAPI = async () => {
      const URL = `https://newsapi.org/v2/top-headlines?country=co&category=${ category }&apiKey=4c5cc9319a1c42ab8d1cd86bbd22e120`
      const response = await fetch(URL)
      const news = await response.json()
      saveNews(news.articles)
    }
    requestAPI()
  }, [category])

  return (
    <>
      <Header title='Search Colombian News' />
      <div className="container white">
        <Form
          saveCategory={saveCategory}
        />
        <ListNews
          news={news}
        />
      </div>
    </>
  );
}

export default App;
