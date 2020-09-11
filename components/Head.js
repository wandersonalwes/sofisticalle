import NextHead from 'next/head'

function Head({ title, description, keywords, image }) {
  return (
    <NextHead>
      <meta httpEquiv="content-language" content="pt-br" />
      <title>{title}</title>

      <meta name="title" content={title}></meta>
      <meta name="description" content={description}></meta>
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow"></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://sofisticalle.com/"></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={image}></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://sofisticalle.com/"></meta>
      <meta property="twitter:title" content={title}></meta>
      <meta property="twitter:description" content={description}></meta>
      <meta property="twitter:image" content={image}></meta>

      <meta NAME="geo.position" CONTENT="16.7022371; 49.2537428"></meta>
      <meta NAME="geo.placename" CONTENT="Goiânia"></meta>
      <meta NAME="geo.region" CONTENT="Goiás"></meta>
    </NextHead>
  )
}

export default Head
