import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'

const Search = () => {
  const [searchResults, setSearchResults] = useState(null)
  return (
    <div className={styles.background}>
      SearchPage
    </div>
  )
}

export default Search