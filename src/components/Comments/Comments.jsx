import React from 'react'
import { DiscussionEmbed } from 'disqus-react'
import urljoin from 'url-join'
import config from '../../../data/SiteConfig'

function Comments ({ postNode }) {
  if (!config.disqusShortname || !postNode) return null

  const post = postNode.frontmatter || {}
  const slug =
    postNode.fields && postNode.fields.slug ? postNode.fields.slug : ''
  const category = post.category || 'uncategorized'
  const url = urljoin(config.siteUrl, category, slug)
  const title = post.title || 'Untitled'

  return (
    <div className='disqus-container' data-ref='Disqus.jsx'>
      <div className='disqus-header'>
        <h3>Comments</h3>
      </div>
      <div className='disqus-body'>
        <p>Leave a comment below:</p>
        <DiscussionEmbed
          shortname='kushaljayswal'
          config={{
            url,
            slug,
            title
          }}
        />
      </div>
    </div>
  )
}

export default Comments
