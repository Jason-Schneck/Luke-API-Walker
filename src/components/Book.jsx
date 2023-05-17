import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Images from '../Images';


const Book = (props) => {

    const [books, setBooks] = useState(null)

    const {booksId} = useParams()

    useEffect( () => {
        axios.get(`https://anapioficeandfire.com/api/books/${booksId}`)
            .then((response) => {
                console.log(response)
                console.log(response.data.name)
                setBooks(response.data)
            })
            .catch( err => console.log(err))
    }, [booksId])


  return (
    <fieldset>
        <legend>Book.jsx</legend>

        <div>
            {
                books ? (
                    < >
                        <h3>Name: {books.name}</h3>
                        <h3>Author: {books.authors}</h3>
                        <h3># of Pages: {books.numberOfPages}</h3>
                        <h3>Release Date: {books.released}</h3>
                    </>
                ) :
                <div>
                    <h3>These aren't the droids you're looking for</h3>
                    <Images/>
                    
                </div>
                    
            }

            <br/>
            
            <a href="/form/books">Select Another Book</a>

            <br/>

            <a href="/">Home</a>


        </div>
        

    </fieldset>
  
  )
}

export default Book