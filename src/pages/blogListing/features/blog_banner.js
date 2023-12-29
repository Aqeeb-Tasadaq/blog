import React from 'react'
import profile from '../../../assets/profile mage.png'

const Blog_banner = () => {
  return (
    <section className="blog_banner_section">
    <div className="page_width">
      <div className="blog_banner">
        <div className="blog_banner_heading">
          <div className="top">
            <button>Technology</button>
            <h1>The Impact of Technology on the Workplace: How Technology is Changing</h1>
          </div>
          <div className="blog_profile">
            <div className="profile_pic">
              <img src={profile} alt="" />
              <p>Jason Francisco<span>August 20, 2022</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Blog_banner