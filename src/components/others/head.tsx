import HeadNext from 'next/head'

export const Head = () => {
  return (
    <HeadNext>
      <title>Kyros - Personal Website</title>
      <meta property="og:title" content="Kyros - Personal Website" key="title" />
    </HeadNext>
  )
}
