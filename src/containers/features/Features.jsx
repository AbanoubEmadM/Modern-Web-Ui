import React from 'react'
import axios from 'axios'
import './features.css'
import { Component } from 'react'
class Features extends Component {
    state = {
        features: []
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                features:res.data.features
            })
        })
    }
    render(){
        const {features} = this.state;
        const Feat = features.map(feat => {
            return(
                <div className="gpt3__features-feature-item" key={feat.id}>
                    <h3>{feat.title}</h3>
                    <p>{feat.text}</p>
                </div>
            )
        })
        return(
            <div className='gpt3__features section__padding'>
                <div className="gpt3__features-heading">
                    <h1>
                    The Future is Now and<br/> You Just Need To Realize<br/> It. Step into Future Today<br/> & Make it Happen.
                    </h1>
                    <p>Request Early Access to Get Started</p>
                </div>
            <div className="gpt3__features-items">
                {Feat}
            </div>
            </div>
        )
    }
}
export default Features