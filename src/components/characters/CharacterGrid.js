import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'
import PropTypes from 'prop-types'

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {characters.length > 0 &&
        characters.map((character) => (
          <CharacterItem key={character.name} character={character} />
        ))}
    </section>
  )
}

CharacterGrid.propTypes = {
  characters: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default CharacterGrid
