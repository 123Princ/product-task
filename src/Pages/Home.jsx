import React from 'react'
import Layout from '../Component/Layout'
import HeroSection from '../Component/HeroSection'
import Products from './Products'

const Home = () => {
  return (
  <Layout>
    <HeroSection/>
    <Products/>
  </Layout>
  )
}

export default Home
