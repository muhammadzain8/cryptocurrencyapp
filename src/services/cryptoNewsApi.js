import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key':
    'da277fb029mshe3aaef031e181cep177ffdjsn60f0dc5f71ee',
};

const baseurl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseurl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `${baseurl}/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
