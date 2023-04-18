import { LatestPainting } from "../Home/LatestPainting/LatestPainting"

import { usePaintingContext } from "../../contexts/PaintingContext"

import './Home.css'

export const Home = () => {
    const {paintings} = usePaintingContext()

    return (
        <section id="welcome-world">
            <div className="welcome-message">
                <h2>Welcome to the world of</h2>
                <h3>Petar Darkovski!</h3>
            </div>

            {/* <img src="./images/full.jpg" alt="hero" /> */}

            {/* <!-- Display div: with information about every game (if any) --> */}

            <div id="home-page">
                <h1>Latest Works</h1>
                <div className="latest-works">
                    {paintings.slice(-3).map(painting => <LatestPainting key={painting._id} {...painting} />).reverse()}
                </div>

                {/* <!-- Display paragraph: If there is no games  --> */}
                {paintings.length === 0 && <p className="no-art">No art yet</p>}


            </div>
        </section>
    )
}