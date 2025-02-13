import React from 'react';
import fire from '../images/about.jpg';

const ImageSection = () => {
    return (
        <div className='ImageSection'>
            <div className="img">
                <img src={fire} alt="profile img" />
            </div>
            <div className="about-info">
                <p className='about-text'>
                    I am a Frontend Developer, a web designer from West Bengal, India. I am studying my Bachelor's in Commputer Application from Siliguri College while looking for opportunities in the field of Web development. Currently I am learning Solidity and Web3 in order to become a full stack block chain developer.
                </p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className="right-section">
                        <p>: <span>Nirban Chakraborty</span></p>
                        <p>: 19</p>
                        <p>: Indian</p>
                        <p>: Bengali, Hindi, English</p>
                        <p>: Siliguri, West Bengal, India</p>
                    </div>
                </div>
                <button className="btn">
                    <a href="https://drive.google.com/file/d/1OKYicOq2gJ0qIZ_wQ7WXlkNmy51l5Cx1/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a>
                </button>
            </div>
        </div>
    );
};

export default ImageSection;
