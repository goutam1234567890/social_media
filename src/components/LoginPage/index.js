import './index.css'
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    return (
        <div className='login-container'>
            <div className='container'>
                <div className="container1">
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761490/dc597494c40bb0fd0e168494b84b1b2b_rmnazm.png" alt="image1" className="image1" />
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761527/5beb7e681006f103fc15c10cf78c95a6_pkrsmx.png" alt="image2" className="image2" />
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761519/cbee766eb05d851754d1499048b6e390_xpeeii.png" alt="image3" className="image3" />
                </div>
                <div className='container1'>
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761584/c862f1ea8a586d737528dccfd2363004_kafd6b.png" alt="image4" className="image4" />
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761606/66c9da0774bf0b45b020839469eb9db2_ulh025.png" alt="image5" className="image5" />
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761643/8b0532ff490cf1da3f105bff7ab9f284_rg0gem.png" alt="image6" className="image6" />
                </div>
                <div className='container1'>
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761633/0c89da65a004e4f412a86eb5cde33adb_bhxkgi.png" alt="image7" className="image7" />
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761592/226326267c072588ee5d44a348cf48de_ofa4tf.png" alt="image8" className="image8" />
                    <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733761614/49a959926bc560b46056df7c41a10eca_zafuoi.png" alt="image9" className="image9" />
                </div>
            </div>
            <div className="login-form">
                <div className='details-container'>
                    <div className='head-container'>
                        <img src="https://res.cloudinary.com/dqhagljvz/image/upload/v1733809311/2de875e6142d3dde26f7cea380c77837_1_edkvaz.png" alt='logo' className='logo' />
                        <h1 className='login-heading'>Vibesnap</h1>
                    </div>
                    <p className='login-description'>Moments That Matter, Shared Forever.</p>
                </div>
                <div>
                    <button className='login-button'>
                        <FcGoogle />
                        <p className='google-signin'>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
