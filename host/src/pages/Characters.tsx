import React, { useEffect, useState } from 'react'

// @ts-ignore
import NavBarComponent from 'NavBarComponent/NavBarComponent'
import { getCharacters } from '../api/Characters'
import CharacterCard from '../components/CharacterCard'

import './Characters.css'
import { GridLoader } from 'react-spinners'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
function Characters() {
    const [characters, setCharacters] = useState<any>([])
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        const fetchCharacters = async () => {
            getCharacters().then((data) => {
                setCharacters(data)
                setLoaded(true)
            })
        }
        fetchCharacters()
    }, [])
    return (
        <div>
            <NavBarComponent />
            {loaded ? <div className='charactersContainer'>
                {characters && characters.data && characters.data.map((character: any) => (
                    <Nav.Link as={NavLink} to={`/${character._id}`} >
                        <CharacterCard key={character.id} description={character.description} image={character.image} name={character.name} />
                    </Nav.Link>
                ))}
            </div> : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}><GridLoader size={40} color="#36d7b7" /></div>}
        </div>
    )
}

export default Characters