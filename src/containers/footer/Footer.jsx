import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-main">
                <h1>Do you want to step in to the<br/> future before others</h1>
                <button>Request Early Access</button>
            </div>
            <div className="gpt3__footer-end">
                <p>GPT-3<br/>
                <span>Crechterwoord K12 182 DK<br/> Alknjkcb, All Rights Reserved</span>
                </p>
                
                <div className="gpt3__footer-end-links">
                    <ul>
                        <h3>Links</h3>
                        <li>Overons</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <h3>Company</h3>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <h3>Get in touch</h3>
                        <li>Crechterwoord K12<br/> 182 DK Alknjkcb</li>
                        <li>085-132567</li>
                        <li>info@payme.net</li>
                    </ul>
                </div>
            </div>
            <p style={{textAlign:'center'}}>© 2021 GPT-3. All rights reserved.</p>
        </div>
    )
}

export default Footer
