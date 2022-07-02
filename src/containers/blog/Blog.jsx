import {React , Component} from 'react'
import axios from 'axios'
import './blog.css'
class Blog extends Component {
    state = {
        blog:[]
    }
    componentDidMount(){
        axios.get('data/data.json').then(res => {
            this.setState({
                blog:res.data.blog
            })
        })
    }
    render(){
        const {blog} = this.state;
        const blogItem = blog.map(item => {
            return(
                <div className='gpt3__blog-blogItem' key={item.id}>
                <img src={item.img} alt="" />
                <div className="gpt3__blogItem-info">
                    <p>{item.time}</p>
                    <h1>{item.title}</h1>
                </div>
            </div>
            )
        })
        return(
            <div className='gpt3__blog section__padding'>
                <div className="gpt3__blog-blogItems">
                {blogItem}
                </div>
            </div>
            )
    }
}

export default Blog
