import Context from "../../context/Context";
import './index.css'
import {Link} from 'react-router-dom'
import { HiArrowSmLeft } from "react-icons/hi";

const EditProfile = () => (
    <Context.Consumer>
        {value => {
            const { name, bio, changeBio, changeName } = value
            const onChangeName = event => {
                changeName(event.target.value)
            }
            const onChangeBio = event => {
                changeBio(event.target.value)
            }
            return (
                <div>
                    <div className='bg-image'>
                        <Link to="/profile">
                            <span><HiArrowSmLeft className='left-arrow' /> Edit Profile</span>
                        </Link>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733895650/1bc60f4364d82c6a06c4a77468ec75cf_vq61oi.png" alt='avatar' className='avatar-photo' />
                    </div>
                    <div>
                        <label>Name</label>
                        <input type="text" value={name} onChange={onChangeName} />
                    </div>
                    <div>
                        <label>Bio</label>
                        <input type="text" value={bio} onChange={onChangeBio} />
                    </div>
                </div>
            )
        }}
    </Context.Consumer>
)

export default EditProfile
