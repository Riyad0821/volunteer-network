import React from 'react';
import './VolunteerItems.css';
import sample from '../../Resource/images/animalShelter.png'

const VolunteerItems = (props) => {
    const {serviceType, img, bgColor} = props.item;
    return (
        <div className="cardd service-items" style={{
            backgroundImage: `url(${(img)})`}}>
            <h3 className="item-title" style={{
            backgroundColor: `${(bgColor)}`}}>{serviceType}</h3>
        </div>
    );
};

export default VolunteerItems;