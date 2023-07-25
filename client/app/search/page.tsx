"use client"

import React, { FormEvent } from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import { NewsArticle } from '@/models/NewsArticles'
import { Box, Button, CircularProgress, Paper, TextField, Grid } from '@mui/material'
import NewsArticleEntry from '../components/NewsArticleEntry'

const Search = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')


  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search) {
      try {
        setSearchResults(null)
        setLoading(true)
        const response: any = await fetch(`/api?query=` + search)
        const articles: any = await response.json()
        console.log(articles)
        setSearchResults(articles)
        console.log(searchResults)
      } catch (error) {
        console.log(error)
      } finally{
        setLoading(false)
      }
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

      <Box sx={{textAlign: 'center'}}>
        {loading && <CircularProgress/>}
        {searchResults?.length === 0 && <p>Nothing found. Try a different search.</p>}
        {searchResults && 
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{display: 'flex', justifyContent: 'center'}}>
        {searchResults.map((articlez: any)=> (
          <Grid item key={articlez.content}>
            <NewsArticleEntry article={articlez} />
          </Grid>
        ))}
      </Grid>}

      </Box>
    </Box>
  )
}

export default Search