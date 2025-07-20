import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../layout'

export default function CategoriesPage ({ data }) {
  // Count posts per category
  const categoryCounts = {}
  data.allMarkdownRemark.nodes.forEach(node => {
    const cat = node.frontmatter.category
    if (cat) {
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1
    }
  })

  const categories = Object.keys(categoryCounts)

  return (
    <Layout>
      <div className='categories-list-container section'>
        <div className='container'>
          <h1>All Categories</h1>
          <ul>
            {categories.map(category => (
              <li key={category}>
                <Link to={`/categories/${category}`}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Link>
                <span style={{ marginLeft: '8px', color: '#888' }}>
                  ({categoryCounts[category]})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(limit: 1000) {
      nodes {
        frontmatter {
          category
        }
      }
    }
  }
`
