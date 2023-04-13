import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '@/utils/api/services/apolloClient'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Layout>
  )
}
