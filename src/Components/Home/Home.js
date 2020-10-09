import React, { useEffect, useState } from 'react';
import './Home.css'
import VolunteerItems from '../VolunteerItems/VolunteerItems';
import Header from '../Header/Header';

const Home = () => {
    // const [serviceItems] = useState(Data);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('https://fast-brushlands-49939.herokuapp.com/activities')
        .then(res => res.json())
        .then(data => setActivities(data))
        }, [])

    return (
        <div>
            <Header></Header>
            <div className="service-container">
                {
                    activities.map(item => <VolunteerItems className="service-items" item={item} key={item._id}></VolunteerItems>)
                }
            </div>
        </div>
    );
};

export default Home;