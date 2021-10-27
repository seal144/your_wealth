import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import StoreProvider from './store/StoreProvider';
import Header from './layouts/Header';
import Content from './layouts/Content';
import Footer from './layouts/Footer';

import './layouts/layouts.scss'

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="app">
          <header className="app__header">
            <Header content="YOUR_WEALTH" />
          </header>
          <main className="app__main">
            <Content />
          </main>
          <footer className="app__footer">
            <Footer content="contact: functionalweasel@gmail.com" />
          </footer>
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
