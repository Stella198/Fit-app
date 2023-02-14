import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import SubscriptionList from '../Components/SubscriptionList';
import './Subscription.css';

function Subscription() {
    return ( 
        <div>
            <Header/>
            <SubscriptionList/>
            <Footer/>
        </div>
     );
}

export default Subscription;