import React from 'react';
import Cards from './Components/Card';
import Footer from './Components/Footer';
import Tabs from './Components/Tabs';
import Contact from './Contact';
import Header from './Header';
import Navbar from './Components/Navbar';
import Section from './Section';

const Home = () => {
    return (
        <div>
              <Navbar/>
              <Header/>
              <Section/>
              <Tabs/>
              <Cards/>
              <Contact/>
              <Footer/>
        </div>
    );
};

export default Home;