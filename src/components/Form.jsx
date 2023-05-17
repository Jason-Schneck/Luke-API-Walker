import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const [charactersNum, setCharactersNum] = useState()


    const navigate = useNavigate()

    

    const submitHandler = (e) => {
        e.preventDefault()
        // navigate to a route
        navigate(`/characters/${charactersNum}`)
    }


  return (
    <fieldset>

        <legend>Form.jsx</legend>

        <br/>

        <form onSubmit={submitHandler}>

            <input type="number" onChange={e => setCharactersNum(e.target.value)} value={charactersNum}/>

            <button style={{backgroundColor:"blue", color:"white"}}>Select Character</button>

        </form>

    
    </fieldset>
  )
}

export default Form