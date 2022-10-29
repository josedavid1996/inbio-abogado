/* eslint-disable comma-dangle */
const ConfigSeo = {
  title: 'Kyros - Personal WebSite',
  titleTemplate: '%s - Next SEO',
  description: 'Siempre a tu servicio.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://inbio-abogado.vercel.app/',
    site_name: 'Next SEO',
    title: 'Kyros - Personal WebSite',
    description: 'Siempre a tu servicio.',
    images: [
      {
        url: 'https://inbio-abogado.vercel.app/images/bgbanner.jpg',
        width: 1200,
        height: 1200,
        alt: 'Next SEO',
      },
    ],
    image_size: '1200x1200',
  },
  twitter: {
    handle: '@next_seo',
    site: '@next_seo',
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: '123456789',
    lang: 'en_IE',
    type: 'website',
  },
  google: {
    handle: '123456789',
    site: 'https://inbio-abogado.vercel.app',
  },
  microsoft: {
    handle: '123456789',
    site: 'https://inbio-abogado.vercel.app',
  },
}
export default ConfigSeo
