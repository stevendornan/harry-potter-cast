import React from 'react'
import PropTypes from 'prop-types'

const CharacterItem = ({ character }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={character.image} alt={character.name} />
        </div>
        <div className='card-back'>
          <h1>{character.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {character.actor}
            </li>
            <li>
              <strong>{character.house ? 'House' : null}</strong>{' '}
              {character.house}
            </li>
            <li>
              <strong>{character.ancestry ? 'Ancestry' : null}</strong>{' '}
              {character.ancestry}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
}

export default CharacterItem
