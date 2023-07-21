import { NewsArticle, NewsResponse } from "@/models/NewsArticles"
import NewsArticleEntry from "./components/NewsArticleEntry"
import { Grid } from "@mui/material"


async function getData() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + process.env.API_KEY)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}


export default async function Home() {
  const data = await getData()
  
  return (
    <main>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{display: 'flex', justifyContent: 'center'}}>
        {data.articles.map((articlez: any)=> (
          <Grid item key={articlez.title}>
            <NewsArticleEntry article={articlez} />
          </Grid>
        ))}
      </Grid>
      
    </main>
  )
}
