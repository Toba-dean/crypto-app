import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'


const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': 'e72c5a1a4emshbc2933ee77a862fp1a7e4bjsn50004ab33234'
}

const cryptoUrl =  'https://coinranking1.p.rapidapi.com';

const createRequest = url => ({
  url,
  headers: cryptoApiHeaders
})


export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: cryptoUrl,
  }),
  endpoints: builder => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }) 
});

export const { 
  useGetCryptosQuery, 
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery } = cryptoApi