import { NewsArticle } from "@/models/NewsArticles"
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link"

interface NewsArticleEntryProps {
  article: NewsArticle
}

const NewsArticleEntry = ({article : {title, description, url, urlToImage}}: NewsArticleEntryProps) => {

  const validImageUrl = (urlToImage?.startsWith('http://') || urlToImage?.startsWith('https://')) ? urlToImage : undefined
  // console.log(title)

  // <Link href={url}>
  //     </Link>
  return (
    <Card sx={{maxWidth: '400px'}}>
        <CardMedia image={validImageUrl} component='img' alt={title} sx={{padding: 0}}/>
      <CardContent sx={{p:'20px'}}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6">{description}</Typography>
      </CardContent>
      </Card>
  )
}

export default NewsArticleEntry