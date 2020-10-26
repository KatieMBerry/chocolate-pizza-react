import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Delicious</h1>
                <h6>THE BEST FOOD BLOG ON THE WEB</h6>
                <img src='./images/logo.png' alt='logo' />
                <div>
                    <img src='./images/fb-icon.png' alt='facebook-icon' />
                    <img src='./images/twit-icon.png' alt='twitter-icon' />
                    <img src='./images/gp-icon.png' alt='google-icon' />
                    <img src='./images/insta-icon.png' alt='instagram-icon' />
                    <img src='./images/flic-icon.png' alt='flicker-icon' />
                    <img src='./images/pint-icon.png' alt='pinterest-icon' />
                    <img src='./images/rss-icon.png' alt='rss-feed-icon' />
                    <img src='./images/mail-icon.png' alt='email-icon' />
                </div>
            </div>
        )
    }
}
