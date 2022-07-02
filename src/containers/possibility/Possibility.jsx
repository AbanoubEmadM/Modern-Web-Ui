import React from 'react'
import image from '../../assets/possibility.png'
import './possibility.css'
const Possibility = () => {
    return (
        <div className='gpt3__possibility section__padding'>
            <div className='gpt3__possibility-image'>
                <img src={image} alt="" />
            </div>
            <div className='gpt3__possibility-info'>
                <a href="#">Request Early Access to Get Started</a>
                <h1>The possibilities are<br/> beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not<br/> thoughts all exercise blessing. Indulgence way everything joy<br/> alteration boisterous the attachment. Party we years to order<br/> allow asked of.</p>
                <a href="#" className='gpt3__possibility-info-link'>Request Early Access to Get Started</a>
            </div>            
        </div>
    )
}

export default Possibility
