import React from 'react'

import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Possibility, Features, Footer, Header, WhatGPT3 } from './containers';
import './styles.scss';

function App() {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App