import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const FormBook = (props) => {

    const [bookNum, setBookNum] = useState()

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        navigate(`/books/${bookNum}`)
    }


  return (
    <fieldset>
        <legend>FormBook.jsx</legend>

        <form onSubmit={submitHandler}>

            <input type="number" onChange={e => setBookNum(e.target.value)} value={bookNum} />

            <button style={{backgroundColor:"blue", color:"white"}}>Select Book</button>

        </form>

    </fieldset>

  )
}

export default FormBook