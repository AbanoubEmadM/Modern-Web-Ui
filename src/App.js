import React from 'react'
import { Blog , Header , Possibility , Footer , Features , WhatGPT3} from './containers'
import {Brand , Cta , Navbar } from './components'
import './App.css'
const App = () => {
    return (
        <div className='App '>
            <div className='gradiant__bg'>
                <Navbar />
                <Header />
            </div> 
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
             <Cta />
             <Footer />
        </div>
    )
}

export default App
