import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './CharacterDetailComponent.css'

import React from 'react'
import { getCharacter } from "../api/Characters"

export default function CharacterDetailComponent() {
    const params = useParams()
    const [character, setCharacter] = useState<any>([])
    useEffect(() => {
        const fetchCharacter = async () => {
            const response = getCharacter(params.characterId as string)
            const data = await response
            setCharacter(data)
        }
        fetchCharacter()
    }, [])
    return (
        <div className="character-container">
            <div className="character-card">
                <img src={character.image} />
                <h3>{character.name}</h3>
                <p>{character.description}</p>
            </div>
            <button>Back</button>
        </div>)
}

