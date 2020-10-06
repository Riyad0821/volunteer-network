import React, { useState } from 'react';
import logo from '../../Resource/logos/Group 1329.png';
import './AddedActivity.css'

const AddedActivity = (props) => {
    return (
            <div className="activity-container">
                <div>
                <img className="service-img" src={logo} alt=""/>
                </div>
                <div>
                <h3 className="title">Humanity More</h3>
                </div>
                <div>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
    );
};

export default AddedActivity;