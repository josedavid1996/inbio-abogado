/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-empty-pattern */
import { useEffect } from 'react'
import { IdataPageGeneral } from './data'
import NextHead from 'next/head'
export const OpenGraph = ({ data }: IdataPageGeneral) => {
  console.log('cambiando meta')
  // useEffect(() => {
  //   console.log('cambando el meta')
  // }, [data])
  return (
    <NextHead>
      <title>{data.tittlePage}</title>
      <meta name="description" content={data.description || ''} />
      <meta name="keywords" content={data.keywords || ''} />

      <meta property="og:site_name" content={data.link} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.tittlePage || ''} />
      <meta property="og:description" content={data.description || ''} />
      <meta property="og:url" content={data.url || ''} />
      <meta property="og:image" content={data.img || ''} />
      <meta property="og:locale" content="es_LA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.tittlePage || ''} />
      <meta name="twitter:description" content={data.description || ''} />
      <meta property="twitter:domain" content={data.domain} />
      <meta property="twitter:url" content={data.url || ''} />
      <meta name="twitter:image" content={data.img || ''} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
    </NextHead>
  )
}
