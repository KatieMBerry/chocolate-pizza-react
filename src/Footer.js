import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section className="author-info">
                    <img src="images/van-pic.png" alt="author" />
                    <h3>Vanessa Stevenson</h3>
                    <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>


                    <button>Share Recipe</button>
                </section>
                <section className="copyright">
                    <img src="images/small-logo.png" alt="small logo" />
                    <p>Delicious (c) 2013 All Rights Reserved.</p>
                    <p>Proudly published with Ghost.</p>
                </section>
            </div>
        )
    }
}
