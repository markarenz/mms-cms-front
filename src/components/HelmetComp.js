import React from 'react'
import { Helmet } from 'react-helmet'
import { baseUrl } from '../constants'

const HelmetComp = (props) => {
  const thisUrl = window.location.href.toString()
  const imgUrl = `${baseUrl}/remote/images/${props.image || 'og_img__home.jpg'}`

  // https://s3.amazonaws.com/www.markmakesstuff.com/remote/images/posts/48.jpeg
  return(
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={ thisUrl } />
      <meta property="og:image" content={ imgUrl } />
      <meta property="og:description" content={props.description} />

      <meta itemprop="name" content={props.title} />
      <meta itemprop="description" content={props.description} />
      <meta itemprop="image" content={ imgUrl } />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@markmakessuff" />
      <meta name="twitter:title" content={ props.title } />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:creator" content="@Swatchity" />
      <meta name="twitter:image:src" content={ imgUrl } />

      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={ thisUrl } />
      <meta property="og:image" content={ imgUrl } />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content="Swatchity.com" />
      <meta property="article:published_time" content={ props.pubDate } />
      <meta property="article:modified_time" content={ props.pubDate } />
    </Helmet>
  )
}

export default HelmetComp
