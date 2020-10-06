import React from 'react';
import './VolunteerItems.css';
import sample from '../../Resource/images/animalShelter.png'
import { Link, useHistory } from 'react-router-dom';

const VolunteerItems = (props) => {
    const { serviceType, img, bgColor } = props.item;
    const history = useHistory();
    const handleAddService = (serviceType) => {
        history.push(`/register/${serviceType}`);
    }
    //console.log(serviceType, img);
    return (
            <div className="cardd service-items" onClick={() => handleAddService(serviceType)} style={{
                backgroundImage: `url(${(img)})`
            }}>
                <h3 className="item-title" style={{
                    backgroundColor: `${(bgColor)}`
                }}>{serviceType}</h3>
            </div>
    );
};

export default VolunteerItems;