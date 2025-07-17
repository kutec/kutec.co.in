import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'

function Search ({ posts }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef(null)
  const filteredPosts = posts.filter(post =>
    post.frontmatter.title.toLowerCase().includes(query.toLowerCase())
  )

  // Handler to close overlay when clicking outside
  const handleOverlayClick = e => {
    if (e.target.classList.contains('search-overlay')) {
      setFocused(false)
      setQuery('')
    }
  }

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [focused])

  return (
    <>
      {focused && (
        <div
          className='search-overlay'
          role='button'
          tabIndex={0}
          aria-label='Close search overlay'
          onClick={handleOverlayClick}
          onKeyDown={e => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
              setFocused(false)
              setQuery('')
            }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(4px)',
            zIndex: 2000
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: 500,
              margin: '40px auto 0 auto', // top margin only
              position: 'relative'
            }}
          >
            <input
              ref={inputRef}
              type='text'
              placeholder='Search blog posts...'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='form-control form-control-lg'
              style={{
                fontSize: '1.25rem',
                padding: '0.75rem 1.25rem',
                borderRadius: '2rem',
                boxShadow: query ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                border: '1px solid #ced4da',
                transition: 'box-shadow 0.2s',
                width: '100%'
              }}
            />
            {query && (
              <ul
                className='list-group mt-2'
                style={{
                  width: '100%',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                  borderRadius: '1rem',
                  background: '#fff',
                  overflow: 'hidden'
                }}
              >
                {filteredPosts.map(post => (
                  <li
                    key={post.fields.slug}
                    className='list-group-item'
                    style={{ border: 'none', padding: '0.75rem 1.25rem' }}
                  >
                    <Link
                      to={`/${post.frontmatter.category}${post.fields.slug}`}
                      style={{
                        textDecoration: 'none',
                        color: '#007bff',
                        fontWeight: 500
                      }}
                      onClick={() => setFocused(false)}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </li>
                ))}
                {filteredPosts.length === 0 && (
                  <li
                    className='list-group-item text-muted'
                    style={{ border: 'none', padding: '0.75rem 1.25rem' }}
                  >
                    No results found.
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
      <div
        className='search-bar my-3'
        style={{ position: 'relative', maxWidth: 500, margin: '0 auto' }}
      >
        <input
          ref={inputRef}
          type='text'
          placeholder='Search blog posts...'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className='form-control form-control-lg'
          style={{
            fontSize: '1.25rem',
            boxShadow: query ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
            border: '1px solid #ced4da',
            transition: 'box-shadow 0.2s'
          }}
          onFocus={() => setFocused(true)}
        />
      </div>
    </>
  )
}

export default Search
