import React from 'react';
import logo from '../../Resource/images/extraVolunteer.png';
import './AddedActivity.css'

const AddedActivity = (props) => {
    const { serviceType, date} = props.enrolled;

    return (
            <div className="activity-container">
                <div>
                <img className="service-img" src={logo} alt=""/>
                </div>
                <div className="title-date">
                <h5 className="title">{serviceType}</h5>
                <h5 className="title"> {date}</h5>
                </div>
                <div>
                    <button className="cancel-btn">Cancel</button>
                </div>
            </div>
    );
};

export default AddedActivity;