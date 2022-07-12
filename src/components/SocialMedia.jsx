import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/rahatkabir007" target='_blank' rel='noreferrer'><BsGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/rahatkabir007/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        </div>
        <div>
            <a href="https://www.facebook.com/rahatkabir007/" target='_blank' rel='noreferrer'><FaFacebookF /></a>
        </div>
    </div>
);

export default SocialMedia;
