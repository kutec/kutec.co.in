import React, { useState, useRef, useEffect } from 'react'
import PostListing from '../PostListing/PostListing'

function Search ({ posts }) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef(null)

  // Filter by title, excerpt, or full content (rawMarkdownBody)
  const filteredPosts =
    query.length >= 3
      ? posts
          .filter(post => {
            const title = post.frontmatter.title?.toLowerCase() || ''
            const excerpt = post.excerpt?.toLowerCase() || ''
            const content = post.rawMarkdownBody?.toLowerCase() || ''
            const q = query.toLowerCase()
            return (
              title.includes(q) || excerpt.includes(q) || content.includes(q)
            )
          })
          .map(post => ({ node: post })) // <-- always wrap!
      : []

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
              margin: '40px auto 0 auto',
              position: 'relative'
            }}
          >
            <div style={{ position: 'relative' }}>
              <input
                ref={inputRef}
                type='text'
                placeholder='Search blog posts...'
                value={query}
                onChange={e => setQuery(e.target.value)}
                className='form-control form-control-lg'
                style={{
                  fontSize: '1.25rem',
                  padding: '0.75rem 2.5rem 0.75rem 1.25rem',
                  borderRadius: '2rem',
                  boxShadow: query ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
                  border: '1px solid #ced4da',
                  transition: 'box-shadow 0.2s',
                  width: '100%'
                }}
              />
              {query && (
                <button
                  type='button'
                  aria-label='Clear search'
                  onClick={() => setQuery('')}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.5rem',
                    color: '#888',
                    cursor: 'pointer'
                  }}
                >
                  &#10005;
                </button>
              )}
            </div>
            {query.length > 0 && query.length < 3 && (
              <div style={{ color: '#888', padding: '0.75rem 1.25rem' }}>
                Please enter at least 3 characters to search.
              </div>
            )}
            {query.length >= 3 && (
              <div style={{ width: '100%', marginTop: '1rem' }}>
                <PostListing postEdges={filteredPosts} />
                {filteredPosts.length === 0 && (
                  <div
                    className='text-muted'
                    style={{ padding: '0.75rem 1.25rem' }}
                  >
                    No results found.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className='search-bar my-3'
        style={{ position: 'relative', maxWidth: 500, margin: '0 auto' }}
      >
        <div style={{ position: 'relative' }}>
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
              transition: 'box-shadow 0.2s',
              padding: '0.75rem 2.5rem 0.75rem 1.25rem'
            }}
            onFocus={() => setFocused(true)}
          />
          {query && (
            <button
              type='button'
              aria-label='Clear search'
              onClick={() => setQuery('')}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                color: '#888',
                cursor: 'pointer'
              }}
            >
              &#10005;
            </button>
          )}
        </div>
        {query.length > 0 && query.length < 3 && (
          <div style={{ color: '#888', padding: '0.75rem 1.25rem' }}>
            Please enter at least 3 characters to search.
          </div>
        )}
        {query.length >= 3 && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '100%',
              zIndex: 101,
              boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
              borderRadius: '1rem',
              background: '#fff',
              overflow: 'hidden',
              width: '100%',
              padding: '1rem'
            }}
          >
            <PostListing postEdges={filteredPosts} />
            {filteredPosts.length === 0 && (
              <div
                className='text-muted'
                style={{ padding: '0.75rem 1.25rem' }}
              >
                No results found.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Search
