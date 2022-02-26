import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': process.env.REACT_APP_NEWSAPI_KEY
}
 
const cryptoUrl =  'https://coinranking1.p.rapidapi.com';

const createNewsRequest = url => ({
  url,
  headers: cryptoNewsApiHeaders
})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: cryptoUrl,
  }),
  endpoints: builder => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createNewsRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  }) 
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi