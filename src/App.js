import {useState} from 'react';
import Form from './components/Form';
import Header from './components/Header';

function App () {
  // set initial category
  const [category, saveCategory] = useState('')

  // useState(initialState)

  return (
    <>
      <Header title='Search Colombian News' />
      <div className="container white">
        <Form
          saveCategory={saveCategory}
        />
      </div>
    </>
  );
}

export default App;
