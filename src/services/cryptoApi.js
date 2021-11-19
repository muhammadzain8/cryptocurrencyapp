import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key':
    'da277fb029mshe3aaef031e181cep177ffdjsn60f0dc5f71ee',
};

const baseurl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseurl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) =>
        createRequest(`${baseurl}/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (id) => createRequest(`${baseurl}/coin/${id}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest(`${baseurl}/exchanges`),
    }),
    getCryptoHistory: builder.query({
      query: ({ id, timePeriod }) =>
        createRequest(`${baseurl}/coin/${id}/history/${timePeriod}`),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetExchangesQuery,
} = cryptoApi;
