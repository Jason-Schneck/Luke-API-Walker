import './App.css';
import {Routes, Route} from 'react-router-dom';
import Character from './components/Character';
import Form from './components/Form';
import Book from './components/Book';
import FormBook from './components/FormBook'
import {Dropdown} from 'rsuite';


function App() {


  return (
    <div className="App">
      <fieldset>

        <legend>App.js</legend>


        <Dropdown title="Luke APIwalker">
      
          <Dropdown.Item as="a" href="/form">Character</Dropdown.Item>

          <Dropdown.Item as="a" href="/form/books">Book</Dropdown.Item>

        </Dropdown>


        <Routes>

          <Route path="/characters/:charactersId" element={<Character/>} />

          <Route path="/books/:booksId" element={<Book/>}/>

          <Route path="/form" element={<Form/>}/>

          <Route path="/form/books" element={<FormBook/>}/>

          <Route path="/" />

        </Routes>

      </fieldset>

    </div>
  );
}

export default App;
