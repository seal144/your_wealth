import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>HOME PAGE</h1>
      <Link className="button" to='/main'>START</Link>
    </>
  )
}

export default Home;
