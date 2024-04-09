import React from 'react'
import './CharacterCard.css'

interface CharacterType {
    name: string
    image: string
    description: string
}

function CharacterCard(props: CharacterType) {
    return (
        <div className="character-card">
            <img src={props.image} alt="Character" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default CharacterCard