import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setIsLoading(true)
    const fetchCharacters = async () => {
      const res = await axios(
        `http://hp-api.herokuapp.com/api/characters?q=${query}`
      )
      const data = res.data
        ? res.data.filter((character) =>
            character.name.toLowerCase().includes(query)
          )
        : []
      setCharacters(data)
      setIsLoading(false)
    }
    fetchCharacters()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} characters={characters} />
    </div>
  )
}

export default App
