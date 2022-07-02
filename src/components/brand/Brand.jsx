import React from 'react'
import './brand.css'
import { google, slack , atlassian , shopify ,dropbox } from './import'
const Brand = () => {
    return (
    <div className='gpt3__brand section__padding '>
        <div className="gpt3__brand-main">
            <img src={google} alt="" />
            <img src={slack} alt="" />
            <img src={atlassian} alt="" />
            <img src={shopify} alt="" />
            <img src={dropbox} alt="" />
        </div>
    </div>
)
}

export default Brand
