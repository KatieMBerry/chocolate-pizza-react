import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="top-left-logo">
                    <img src='./images/logo.png' alt='logo' />
                    <span>
                        <h2>Delicious</h2>
                        <p className="logop">THE BEST FOOD BLOG ON THE WEB</p>
                    </span>
                </div>
                <div className="social-links">
                    <img src='/images/fb-icon.png' alt=' facebook-icon' />
                    <img src='/images/twit-icon.png' alt='twitter-icon' />
                    <img src='/images/gp-icon.png' alt='google-icon' />
                    <img src='/images/insta-icon.png' alt='instagram-icon' />
                    <img src='/images/flic-icon.png' alt='flicker-icon' />
                    <img src='/images/pint-icon.png' alt='pinterest-icon' />
                    <img src='/images/rss-icon.png' alt='rss-feed-icon' />
                    <img src='/images/mail-icon.png' alt='email-icon' />
                </div>
            </div>
        )
    }
}
