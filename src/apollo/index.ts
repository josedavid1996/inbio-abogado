/* eslint-disable comma-dangle */
import { URI } from '@Uri/index'

import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
})

export default client
