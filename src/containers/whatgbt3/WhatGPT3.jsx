import axios from 'axios'
import {React, Component } from 'react'
import Features from '../features/Features'

import './whatgbt.css'
class WhatGPT3 extends Component {
    state = {
        whatGPT3: []
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                whatGPT3:res.data.WhatGPT3
            })
        })
    }
    render(){
        const {whatGPT3} = this.state;
        const GPT3Item = whatGPT3.map(Item => {
            return(
            <div className="gpt3__whatisgpt3__feature-box" key={Item.id}>
                <h2>{Item.title}</h2>
                <p>{Item.text}</p>
            </div>
            )
        })
        return(
            <div className='gpt3__whatisgpt3 section__padding'>
            <div className="gpt3__whatisgpt3-main">
                <h1>What is GPT-3</h1>
                <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His <br/>defective nor convinced residence own. Connection has put impossible own apartments <br/>boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="gpt3__whatisgpt3-Library">
                <div className="gpt3__whatisgpt3-possiblities">
                    <h1>The possibilities are beyond<br/> your imagination</h1>
                    <a href="#">Explore The Library</a>
                </div>
                <div className="gpt__whatisgpt3-features">
                        {GPT3Item}
                </div>
            </div>
        </div>

        )
    }
}
export default WhatGPT3
/*

*/