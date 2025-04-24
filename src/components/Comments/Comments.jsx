import React from "react";
import { Disqus } from 'gatsby-plugin-disqus';
import urljoin from "url-join";
import config from "../../../data/SiteConfig";

function Comments({ postNode }) {
  if (!config.disqusShortname) {
    return null;
  }
  const post = postNode.frontmatter;
  const url = urljoin(config.siteUrl, post.category, postNode.fields.slug);
  return (
    <div className="disqus-container" data-ref="Disqus.jsx">
      <div className="disqus-header">
        <h3>Comments</h3>
      </div>
      <div className="disqus-body">
        <p>Leave a comment below:</p>
        <Disqus
          config={{
            url,
            identifier: post.title,
            title: post.title,
          }}
        />
      </div>
    </div>
  );
}

export default Comments;
