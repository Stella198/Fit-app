import React from 'react';
import DescriptionElement from './DescriptionElement';

import './Description.css'

function Description() {
    return ( 
        <div className='Description'>
            <div className='description-container'>
            <DescriptionElement  icon='./images/content1.jpg'  title='Body Shape' description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.'/>

            <DescriptionElement  icon='./images/content2.jpg' title='Extreme' description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.'/>

            <DescriptionElement icon='./images/content3.jpg'  title='Burn' description ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.'/>
            </div>
        </div>
     );
}

export default Description;