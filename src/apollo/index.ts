/* eslint-disable comma-dangle */

import { ApolloClient, InMemoryCache } from '@apollo/client'

const mode: { [key: string]: string } = {
  /** ambiente de pruebas */
  desarrollo: process.env.NEXT_PUBLIC_DESARROLLO || '',

  /** ambiente para el usuario final */
  produccion: process.env.NEXT_PUBLIC_PRODUCTION || '',
}

export const client = new ApolloClient({
  uri: mode[process.env.NEXT_PUBLIC_MODE || 'desarrollo '],
  cache: new InMemoryCache(),
})

export default client
