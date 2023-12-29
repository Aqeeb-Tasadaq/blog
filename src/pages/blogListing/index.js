import React from 'react'
import Title from './features/title'
import BlogBanner from './features/blog_banner'
import Advertisement from '../homePage/features/advertisement'
import Posts from '../homePage/features/posts'

const BlogListing = () => {
  return (
    <div>
    <Title/>
    <BlogBanner/>
    <Posts/>
    <Advertisement/>
    </div>
  )
}

export default BlogListing