import React from 'react';

import StoreProvider from './store/StoreProvider';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

import './layouts/layouts.scss'

function App() {
  return (
    <StoreProvider>
      <div className="app">
        <header className="app__header">
          <Header content="YOUR_WEALTH" />
        </header>
        <main className="app__main">
          <h2>MIAN</h2>
        </main>
        <footer className="app__footer">
          <Footer content="contact: functionalweasel@gmail.com" />
        </footer>
      </div>
    </StoreProvider>
  );
};

export default App;
