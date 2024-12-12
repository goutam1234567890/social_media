import {Component} from 'react'
import Profile from '../Profile'
import Feeds from '../Feeds'
import { BsPlusLg } from "react-icons/bs";
import './index.css'

class Feed extends Component{
    render(){
        return(
            <div>
                <Profile />
                <Feeds />
                <div className='plusIcon-container'>
                <BsPlusLg className='plusicon' />
                </div>
            </div>
        )
    }
}

export default Feed
