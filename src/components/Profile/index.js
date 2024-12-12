import './index.css'
import {Link} from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";

const Profile = () => (
    <Link to="/profile" className='profile'>
    <div className='profile-container'>
        <RxAvatar className='avatar' />
        <div>
            <p className='welcome'>Welcome Back,</p>
            <span className='headings'>Avatar Name</span>
        </div>
    </div>
    </Link>
)

export default Profile
