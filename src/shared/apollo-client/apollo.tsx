'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { PropsWithChildren } from 'react'
import { CONFIG } from '../../../global-config'

export const createApolloClient = () => {
  return new ApolloClient({
    uri: CONFIG.site.apiUrl,
    cache: new InMemoryCache(),
  })
}

const apolloClient = createApolloClient()

export const CustomApolloProvider = ({ children }: PropsWithChildren) => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
)
