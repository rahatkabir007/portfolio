import React from 'react';
import { Header, About, Skills, Work, Testimonial, Footer } from './container'
import { Navbar } from './components';
const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </>
    );
};

export default Home;