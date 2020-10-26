import React, { Component } from 'react'

export default class MainContent extends Component {
    render() {
        return (
            <div>
                <span>
                    <h1>Chocolate Pizza</h1>
                    <p className="timestamp">
                        Posted on 15 Dec 2013 / Desserts
                    </p>
                </span>
                <img src='images/choco-pizza.png' alt="chocolate pizza pic" />
                <p>For the fig-swirl: Melt butter over medium heat in a saucepan. Add brown siugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
                <p>Ice cream: In a small pot over medium heat, combine milk, add granulated sugar until sugar is completely dissolved and the milk is just barely luke warm. Whisk in the egg yolks. Set mixture in the fridge and wait until the fig mixture cooled.</p>
                <p>Using and ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, ie, let spin and thicken for 20 minutes before adding marscapone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi frozen mixture into a pyrex dish or glass tupperware. Freeze for at least 2 hours before serving.</p>

            </div>
        )
    }
}
