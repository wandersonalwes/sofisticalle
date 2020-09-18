import api from '../services/api'

export async function getCategoryBySlug(slug) {
  const {
    data: [category]
  } = await api.get(`/categories?slug=${slug}`)

  const { products } = category

  return {
    props: {
      category,
      products
    }
  }
}
