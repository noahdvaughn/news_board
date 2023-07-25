import { NewsArticle } from "@/models/NewsArticles"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link"

interface NewsArticleEntryProps {
  article: NewsArticle
}

const NewsArticleEntry = ({article : {title, description, url, urlToImage}}: NewsArticleEntryProps) => {

  const validImageUrl = (urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://')) ? urlToImage : undefined
  return (
    <Card sx={{width: {xs: '100vw', s: '100vw', md: '100vw', lg: '400px'}, height: {lg: '400px'}}}>
        <CardMedia image={validImageUrl} component='img' alt={title} sx={{padding: 0}}/>
      <CardContent sx={{p:'20px', height: '10rem', display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" >{title}</Typography>
      </CardContent>
      </Card>
  )
}

export default NewsArticleEntry
{/* <Typography variant="h6">{description}</Typography> */}