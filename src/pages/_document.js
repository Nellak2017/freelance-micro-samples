import { Html, Head, Main, NextScript } from 'next/document'

// TODO: get logo and update href
const { LOGO, TITLE, DESCRIPTION, PAGE_TOPIC, PAGE_TYPE } = { LOGO: '/get-a-logo.png', TITLE: 'Freelance Samples', PAGE_TOPIC: 'Freelancing', PAGE_TYPE: 'Static', DESCRIPTION: 'A site for showcasing my skills as a Freelance Front End Developer. It is a small sample of what I am capable of.', }
export const Document = () => (
  <Html lang='en'>
    <Head>
      <link rel='icon' href={LOGO} width='20px' height='27px' />
      <meta property='og:url' content='/' /> <meta property='og:image' content={LOGO} /> <meta property='og:title' content={TITLE} /> <meta property='og:type' content='website' /> <meta property='og:locale' content='en_US' /> <meta property='og:description' content={DESCRIPTION} />
      <meta property='twitter:image' content={LOGO} /> <meta property='twitter:card' content='summary_large_image' /> <meta property='twitter:title' content={TITLE} /> <meta property='twitter:description' content={TITLE} />
      <meta httpEquiv='content-language' content='en' /><meta charSet='UTF-8' />
      <meta name='keywords' content={DESCRIPTION} /> <meta name='author' content='Connor Keenum' /> <meta name='description' content={DESCRIPTION} /> <meta name='page-topic' content={PAGE_TOPIC} /> <meta name='page-type' content={PAGE_TYPE} /> <meta name='audience' content='Everyone' /> <meta name='robots' content='index, follow' />
    </Head>
    <body><Main /><NextScript /></body>
  </Html>
)
export default Document