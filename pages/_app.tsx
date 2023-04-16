import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
// imports from packages
import { ApolloProvider } from '@apollo/client'

// imports from app
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
