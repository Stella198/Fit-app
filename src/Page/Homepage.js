import React from 'react';
import Carousel from '../Components/Carousel';
import ContactForm from '../Components/ContactForm';
import Description from '../Components/Description';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import './Homepage.css';

function Homepage() {
    return ( 
        <div>
            <Header/>
            <Carousel/>
            <Description/>
            <ContactForm/>
            <Footer />
        </div>
     );
}

export default Homepage;
