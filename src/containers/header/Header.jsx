import React from 'react'
import './header.css'
import ai  from '../../assets/ai.png'
import people  from '../../assets/people.png'
const Header = () => {
    return (
        <div className='gpt3__header section__padding'>
            <div className="gpt3__header-info">
                <h1>Let's Build Something amazing with GPT-3 OpenAi</h1>
                <p>Yet bed any travelling assistance indulgence unpleasing.
                    Not thought all exercise blessing.indulgence way everything joy alteratoin boisterious the attachment. Party we years to order allow asked of.way everything joy alteratoin boisterious
                </p>
                <div className="gpt3__header-form">
                    <input type="text" placeholder='Enter your email'/>
                    <button>Get Started</button>
                </div>
                <div className="gpt3__header-people">
                    <img src={people} alt="" />
                    <p>1600 people requsted access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-img">
                <img src={ai} alt="" />
            </div>
        </div>
    )
}

export default Header
