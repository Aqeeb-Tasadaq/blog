import React from 'react'
import Banner from './features/banner'
import Advertisement from './features/advertisement'
import Posts from './features/posts'

const HomePage = () => {
  return (
    <div>
        <Banner/>
        <Advertisement/>
        <Posts/>
        <Advertisement/>
    </div>
  )
}

export default HomePage