import { NewsArticle, NewsResponse } from "@/models/NewsArticles"
import NewsArticleEntry from "./components/NewsArticleEntry"
// import { GetServerSideProps } from "next"


// interface BreakingNewsPageProps{
//   newsArticles: NewsArticle[],

// }

// export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> =async () => {
//   const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + process.env.API_KEY)
//   const newsResponse: NewsResponse = await response.json()
//   return{
//     props: {newsArticles: newsResponse.articles}
//   }
// }

async function getData() {
  const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + process.env.API_KEY)
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return response.json()
}


export default async function Home() {
  const data = await getData()
  // console.log(data)
  return (
    <main>
      <NewsArticleEntry article={data.articles[0]} />
      
    </main>
  )
}
