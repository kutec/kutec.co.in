import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from '../Navigation/Navigation'
import Search from '../Search/Search'

function Header ({ config }) {
  const title = config.siteTitle
  const { copyright } = config
  if (!copyright) {
    return null
  }

  // Query all posts for search
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(limit: 1000) {
        nodes {
          frontmatter {
            title
            category
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  console.log('Header - data', data)

  return (
    <header className='header'>
      <nav className='navbar fixed-top navbar-light navbar-expand-lg'>
        <div className='container'>
          <a className='navbar-brand' href='/'>
            {/* <figure className="image d-inline-block align-middle mb-0">
              <img height="64px" className="img-fluid" src={logo} alt={title || "Site logo"} />
            </figure> */}
            <strong> {title}</strong>
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#basic-navbar-nav'
            aria-controls='basic-navbar-nav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>

          <div className='collapse navbar-collapse' id='basic-navbar-nav'>
            <Search posts={data.allMarkdownRemark.nodes} />
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/categories'>
                  Categories
                </Link>
              </li>
              <Navigation config={config} labeled />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
