import React, { useState } from 'react';
import './Home.css'
import Data from '../../fakeData/Items';
import VolunteerItems from '../VolunteerItems/VolunteerItems';

const Home = () => {
    const [serviceItems] = useState(Data);
    return (
        <div className="service-container">
            {
                serviceItems.map(item => <VolunteerItems className="service-items" item = {item}></VolunteerItems>)
            }
        </div>
    );
};

export default Home;