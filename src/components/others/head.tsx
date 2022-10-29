import HeadNext from 'next/head'

export const Head = () => {
  return (
    <HeadNext>
      <title>Kyros - Personal Websote</title>
      <meta property="og:title" content="My page title" key="title" />
    </HeadNext>
  )
}
