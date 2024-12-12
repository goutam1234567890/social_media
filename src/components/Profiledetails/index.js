import { Component } from 'react'
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from 'react-router-dom'
import './index.css'

class Profiledetails extends Component {
    render() {
        return (
            <div>
                <div className='bg-image'>
                    <Link to="/">
                        <HiArrowSmLeft className='left-arrow' />
                    </Link>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733895650/1bc60f4364d82c6a06c4a77468ec75cf_vq61oi.png" alt='avatar' className='avatar-photo' />
                </div>
                <Link className='edit-link'>
                    <p className='edit-profile'>Edit Profile</p>
                </Link>
                <p>My Posts</p>
            </div>
        )
    }
}

export default Profiledetails
