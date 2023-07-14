import { NewsArticle } from "@/models/NewsArticles"
import { GetServerSideProps } from "next"


interface BreakingNewsPageProps{
  newsArticles: NewsArticle[],

}

export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> =async () => {
  
}


export default function Home({newsArticles} : BreakingNewsPageProps) {
  return (
    <main>
      page
    </main>
  )
}
