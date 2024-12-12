import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { IoNavigate } from "react-icons/io5";
import Popup from 'reactjs-popup';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import 'reactjs-popup/dist/index.css'; // Import the popup styles
import './index.css';

const FeedItem = (props) => {
    const { postData } = props;
    const { description, id, hashtags, images, post_by, like_by } = postData;

    const likeCount = () => {
        return like_by.length;
    };

    const getRandomColor = () => {
        const colors = [
            "#00FF7F", "#40E0D0", "#1E90FF", "#4B0082", "#8A2BE2",
            "#00CED1", "#4682B4", "#008080", "#2E8B57", "#5F9EA0",
        ];
        let color = colors[Math.floor(Math.random() * colors.length)];
        return color;
    };

    const [popupOpen, setPopupOpen] = useState(false); // State to control popup visibility

    const handleShareClick = () => {
        setPopupOpen(true); // Open the popup when "Share" is clicked
    };

    const closePopup = () => {
        setPopupOpen(false); // Close the popup
    };

    const backgroundColor = getRandomColor();

    return (
        <li id={id} post_by={post_by} className="listItem" style={{ backgroundColor: backgroundColor }}>
            <div>
                <p>{description}</p>
                <p style={{ color: 'blue' }}>{hashtags}</p>
                <img src={images} alt="images" className="postImages" />
            </div>
            <div className='bottom-container'>
                <div>
                    <FcLike />
                    <span>{likeCount()}</span>
                </div>
                <button onClick={handleShareClick} className='share-button'>
                    <IoNavigate />
                    <p>Share</p>
                </button>

                <Popup open={popupOpen} onClose={closePopup} modal>
                    <div className="popup-container">
                        <p className='share-name'>Share Post</p>
                        <div className='share-container'>
                            <div className='cont1'>
                                <div className='logo-container'>
                                    <FaTwitter className='twitter-logo' />
                                    <p className='twitter-name'>Twitter</p>
                                </div>
                                <div className='logo-container'>
                                    <FaFacebook className='facebook-logo' />
                                    <p className='facebook-name'>Facebook</p>
                                </div>
                                <div className='logo-container'>
                                    <FaRedditAlien className='reddit-logo' />
                                    <p className='reddit-name'>Reddit</p>
                                </div>
                                <div className='logo-container'>
                                    <FaDiscord className='discord-logo' />
                                    <p className='discord-name'>Discord</p>
                                </div>
                            </div>
                            <div className='cont1'>
                                <div className='logo-container'>
                                    <FaWhatsappSquare className='whatsapp-logo' />
                                    <p className='whatsapp-name'>Whatsapp</p>
                                </div>
                                <div className='logo-container'>
                                    <FaFacebookMessenger className='messenger-logo' />
                                    <p className='messenger-name'>Messenger</p>
                                </div>
                                <div className='logo-container'>
                                    <FaTelegramPlane className='telegram-logo' />
                                    <p className='telegram-name'>Telegram</p>
                                </div>
                                <div className='logo-container'>
                                    <FaInstagramSquare className='instagram-logo' />
                                    <p className='instagram-name'>Instagram</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="trigger-button" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </Popup>
            </div>
        </li>
    );
};

export default FeedItem;
