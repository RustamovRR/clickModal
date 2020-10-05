import React, { useEffect } from 'react'
import { CharacterGrid } from './components/characters/characterGrid'
import { Search } from './components/Search'

import './App.css'

export function App() {

  const [items, setItems] = React.useState([])
  const [query, setQuery] = React.useState('')

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/characters?name=${query}`)
      .then(res => res.json())
      .then(res => setItems(res))

  }, [query])

  return (
    <div className='root'>
      <Search getQuery={(e) => setQuery(e)} />
      <CharacterGrid items={items} />
    </div>
  )
}