import { NextResponse } from 'next/server'


export async function GET(request: Request){
  const {searchParams} = new URL(request.url)
  const query = searchParams.get('query')

  if(!query){
    return NextResponse.json({error: 'Please provide search query'})
  }


  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=` + process.env.API_KEY)
  const response = await res.json()

  return NextResponse.json({response})
}