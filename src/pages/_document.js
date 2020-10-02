import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-br" style={{ fontSize: '62.5%' }}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-158764715-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-158764715-1');
        `
            }}
          />

          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-5702245216877025",
                enable_page_level_ads: true
              });
        `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v8.0&appId=602877870517600&autoLogAppEvents=1"
            nonce="XHDQR5LV"
          ></script>
        </body>
      </Html>
    )
  }
}
