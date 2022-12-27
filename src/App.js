import './App.css';
import React, { useState } from 'react';
import axios from "axios"
import BookCard from "./components/bookCard"
function App() {
  const [book, setBook] = useState("")
  const [bookList, setBookList] = useState([])
  const handleSearch = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
      .then((data) => {
        console.log(data.data.items);
        setBookList(data.data.items)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  return (
    <div className="App">
      <div className='container' >
        <div className='header'>
          Book Search
        </div>
        <div className='body-container' >
          <div>
            <input type="text" id='search-field' onChange={(e) => setBook(e.target.value)} />
            <button id='search-btn' onClick={handleSearch} >search</button>
          </div>

          <div className='book-container ' >
            {bookList.length ? bookList.map((item) => {
              return <BookCard key={item.id} data={item} />
            })
              : null
            }

          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
