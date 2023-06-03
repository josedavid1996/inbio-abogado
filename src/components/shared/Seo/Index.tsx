import React from 'react'
import NextHead from 'next/head'

interface Props {
  data?: {
    tittlePage: string
    description?: string
    url: string
    keywords?: string
    imgPrincipal?: string
  }
}

export const Seo = ({ data }: Props) => {
  return (
    <>
      <NextHead>
        <title>{data?.tittlePage! || ''}</title>
        <link rel="shortcut icon" href="/seo/index.webp"></link>
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data?.tittlePage || ''} />
        <meta property="og:description" content={data?.description || ''} />
        <meta property="og:url" content={data?.url || ''} />
        <meta property="og:site_name" content={data?.tittlePage || ''} />
        <meta name="keywords" content={data?.keywords || ''} />

        {/* Para facebook, SMS */}
        <meta property="og:image" content={data?.imgPrincipal || ''} />
        <meta
          property="og:image:secure_url"
          content={data?.imgPrincipal || ''}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content={data?.description || ''} />

        {/* Para twitter  */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={data?.description || ''} />
        <meta name="twitter:title" content={data?.tittlePage || ''} />
        <meta name="twitter:image" content={data?.imgPrincipal || ''} />
      </NextHead>
    </>
  )
}
