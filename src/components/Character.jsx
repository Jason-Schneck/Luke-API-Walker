import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Images from '../Images'

const Character = (props) => {


    const [characters, setCharacters] = useState(null)


    const {charactersId} = useParams()
    console.log(charactersId)


    useEffect( () => {
        axios.get(`https://anapioficeandfire.com/api/characters/${charactersId}`)
            .then((response) => {
                console.log(response.data)
                console.log(response.data.name)
                setCharacters(response.data)
            })
            .catch( err => console.log(err))
    }, [charactersId])


  return (
    <fieldset>
        <legend>Character.jsx</legend>
        {/* {JSON.stringify(characters)} */}

        <div>

            {
                characters ? (
                    < >
                        <h3>{characters.name}</h3>
                        <br/>
                        <h4>Gender: {characters.gender}</h4> 
                        <h4>Born : {characters.born}</h4>
                        <h4>Death: {characters.died}</h4>
                    </>
                ) :
                <div>
                    <h3>These aren't the droids you're looking for</h3>
                    <Images />
                </div>
            }

            <br/>

            <a href="/form">Select Another Character</a>

            <br/>

            <a href="/">Home</a>

        </div>


    </fieldset>
  )
}

export default Character