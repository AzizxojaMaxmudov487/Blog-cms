import React from 'react'
import {Header} from '.'
import FeaturedPosts from '../../sections/FeaturedPosts'

export default function Layout({ children }) {
  return (
    <>
    <Header/>
    <FeaturedPosts/>
    {children}
    </>
  )
}
