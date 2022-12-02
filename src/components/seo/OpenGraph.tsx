/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable no-empty-pattern */
import { useEffect } from 'react'
import { IdataPageGeneral } from './data'
import NextHead from 'next/head'
export const OpenGraph = ({ data }: IdataPageGeneral) => {
  return (
    <NextHead>
      <title>{data.tittlePage}</title>
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={data.tittlePage || ''} />
      <meta property="og:description" content={data.description || ''} />
      <meta property="og:url" content={data.url || ''} />
      <meta property="og:site_name" content={data.tittlePage || ''} />
      {/* <meta name="keywords" content={data.keywords || ''} /> */}

      {/* Para facebook, SMS */}
      <meta property="og:image" content={data.imgSecundaria || ''} />
      <meta property="og:image:secure_url" content={data.imgSecundaria || ''} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta
        property="og:image:alt"
        content={data.description || data.imgSecundaria}
      />

      {/* Para twitter  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={data.description || ''} />
      <meta name="twitter:title" content={data.tittlePage || ''} />
      <meta name="twitter:image" content={data.imgSecundaria || ''} />

      {/* Para whatsapp */}
      <meta property="og:image" content={data.imgPrincipal || ''} />
      <meta property="og:image:secure_url" content={data.imgPrincipal || ''} />
      {/* <meta property="og:image:type" content="image/png" /> */}
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content={data.description || ''} />

      {/* <meta property="og:locale" content="es_ES" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Neveras inteligentes para hostelería" />
<meta property="og:description" content="Las bebidas más frías del mundo" />
<meta property="og:url" content="https://wondercool.eu/" />
<meta property="og:site_name" content="Wondercool | Neveras inteligentes" />
<!-- Para facebook, SMS -->
<meta property="og:image" content="https://wondercool.eu/wp-content/uploads/2019/01/logo-wondercool-redes-sociales-3-lineas-original-1200x630.png" />
<meta property="og:image:secure_url" content="https://wondercool.eu/wp-content/uploads/2019/01/logo-wondercool-redes-sociales-3-lineas-original-1200x630.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Neveras para hostelería, Wondercool" />
<!-- Para twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:description" content="Las bebidas más frías del mundo" />
<meta name="twitter:title" content="Neveras inteligentes para hostelería" />
<meta name="twitter:image" content="https://wondercool.eu/wp-content/uploads/2019/01/logo-wondercool-redes-sociales-3-lineas-original-1024x512.png" />
<!-- Para whatsapp -->
<meta property="og:image" content="http://wondercool.eu/wp-content/uploads/2019/01/logo-wondercool-redes-sociales-3-lineas-original-300x300.png" />
<meta property="og:image:secure_url" content="https://wondercool.eu/wp-content/uploads/2019/01/logo-wondercool-redes-sociales-3-lineas-original-300x300.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="300" />
<meta property="og:image:height" content="300" /> */}
    </NextHead>
  )
}
