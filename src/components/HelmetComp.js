import React from 'react'
import { Helmet } from 'react-helmet'

const HelmetComp = (props) => {
  return(
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={ window.location.origin.toString() } />
      <meta property="og:image" content={ window.location.origin.toString() + "/images/" + props.image } />
      <meta property="og:description" content={props.description} />

      <meta itemprop="name" content={props.title} />
      <meta itemprop="description" content={props.description} />
      <meta itemprop="image" content={ window.location.origin.toString() + "/images/" + props.image } />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@markmakessuff" />
      <meta name="twitter:title" content={ props.title } />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:creator" content="@Swatchity" />
      <meta name="twitter:image:src" content={ window.location.origin.toString() + "/images/" + props.image } />

      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={ window.location.origin.toString() } />
      <meta property="og:image" content={ window.location.origin.toString() + "/images/" + props.image } />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content="Swatchity.com" />
      <meta property="article:published_time" content={ props.pubDate } />
      <meta property="article:modified_time" content={ props.pubDate } />
    </Helmet>
  )
}

export default HelmetComp
