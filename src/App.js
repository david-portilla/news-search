import Form from './components/Form';
import Header from './components/Header';

function App () {
  return (
    <>
      <Header title='Search Colombian News' />
      <div className="container white">
        <Form />
      </div>
    </>
  );
}

export default App;
