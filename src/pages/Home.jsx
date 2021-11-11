import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h2 className="home__title">ABOUT</h2>
      <p className="home__paragraph">
        This is "YOUR_WEALTH" - simple web app, done for training purposes. It was created using React.js.
        App is fetching data from public API ( api.nbp.pl and api.bitbay.net) about currencies, crypto currencies and gold rate. You can input assets in various units and app will calculate for you sum of this assets in unit of your choice using current rate.
      </p>
      <Link className="button home__button" to='/main'>START</Link>
    </div>
  )
}

export default Home;

//@todo flex