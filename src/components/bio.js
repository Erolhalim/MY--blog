/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
<<<<<<< HEAD
          Written by <strong>{'Erol Mehmet Halim'}</strong> {author?.summary || null}
=======
          Written by <strong>{'Erol Halim'}</strong> {author?.summary || null}
>>>>>>> a62e180a4b131661bc385660e3292e108abe9fdb
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
