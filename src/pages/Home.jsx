import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <h2 className="home__title">ABOUT</h2>
      <p className="home__paragraph">
        This is "YOUR_WEALTH" - a simple web app, done for training purposes. The app is fetching data from public API (
        api.nbp.pl and api.zonda.exchange) on currencies, cryptocurrencies, and gold rate. You can input assets in
        various units and the app will calculate for you the sum of these assets in a unit of your choice using the
        current rate. Used: React.js, Sass, ant-design/icons.
      </p>
      <Link className="button home__button" to="/main">
        START
      </Link>
    </div>
  );
};

export default Home;
