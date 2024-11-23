import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Info from './pages/Info';
import Availability from './components/Availability';
import More from './pages/More';
//import Payment from './components/Payment';

const App = () => {
  return (
<Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <TransitionGroup>
            <CSSTransition
              key={window.location.pathname}
              timeout={500}
              classNames="fade"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/store" element={<Store />} />
                <Route path="/info" element={<Info />} />
                <Route path="/availability" element={<Availability />} />
                <Route path="/more" element={<More />} />
                
              </Routes>
              
            </CSSTransition>
          </TransitionGroup>         
        </main>
      </div>
    </Router>
  

  );
}

export default App;
