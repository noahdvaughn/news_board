"use client"

import React, { FormEvent } from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import { NewsArticle } from '@/models/NewsArticles'
import { Box, Button, Paper, TextField } from '@mui/material'

const Search = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null)
  const [loading, isLoading] = useState()
  const [search, setSearch] = useState('')
  console.log(search)

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search) {
      alert(search)
    }
  }


  return (
    <Box>
      <Box component='form' onSubmit={handleSubmit}>
     <TextField variant='outlined' fullWidth label='search' onChange={(e)=> {setSearch(e.target.value)}} />
     <Button type='submit'>
      Go
     </Button>
      </Box>
    </Box>
  )
}

export default Search