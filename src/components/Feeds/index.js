import {Component} from 'react'
import FeedItem from '../FeedItem'
import './index.css'

class Feeds extends Component{
    state={postList: []}

    componentDidMount() {
        this.getPosts()
    }

    getPosts = async () => {
        const apiurl="https://6756f736c0a427baf94b2bcd.mockapi.io/posts"
        const options = {
            headers: {
                'content-type': 'application/json',
            },
            method: 'GET',
        }
        const response = await fetch(apiurl, options)
        console.log(response)
        if(response.ok) {
            const fetchedData = await response.json()
            this.setState({postList: fetchedData})
        }
    }
    render(){
        const {postList} = this.state
        return(
            <div>
                <h1 className='head'>Feed</h1>
                <ul className='unorderlist'>{postList.map(post => (
                    <FeedItem postData={post} key={post.id} />
                ))}</ul>
            </div>
        )
    }
}

export default Feeds

