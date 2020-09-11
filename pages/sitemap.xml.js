import React from 'react'
import api from '../services/api'

const sitemapXml = data => {
  let latestPost = 0
  let projectsXML = ''

  data.map(post => {
    console.log(post)
    const postDate = Date.parse(post.updated_at)
    if (!latestPost || postDate > latestPost) {
      latestPost = postDate
    }

    const projectURL = `https://sofisticalle.com/${post.slug}/`
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <lastmod>${postDate}</lastmod>
        <priority>0.50</priority>
      </url>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://sofisticalle.com/</loc>
        <lastmod>${latestPost}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://sofisticalle.com/moveis/</loc>
        <priority>0.80</priority>
      </url>
      ${projectsXML}
    </urlset>`
}

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const data = await api.get('/products').then(response => response.data)

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemapXml(data))
    res.end()
  }
}

export default Sitemap
