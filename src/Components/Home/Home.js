import React, { useState } from 'react';
import './Home.css'
import Data from '../../fakeData/Items';
import VolunteerItems from '../VolunteerItems/VolunteerItems';
import Header from '../Header/Header';

const Home = () => {
    const [serviceItems] = useState(Data);
    const [activities, setActivities] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    //     }, [])


    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const productids = Object.ids(savedCart);
    //     fetch('http://localhost:5000/productsByids', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(productids)
    //     })
    //     .then(res => res.json())
    //     .then(data => setCart(data))
    // },[])


    const handleAddActivity = (activity) => {
        // const toBeAddedid = activity.id;
        // const sameActivity = activities.find(item => item.id === activity.id);
        // let newActivity;
        // if (sameActivity) {
        //     const others = activities.filter(item => item.id !== toBeAddedid);
        //     newActivity = [...others, sameActivity];
        // }
        // else {
        //     newActivity = [...activities, activity];
        // }
        // setActivities(newActivity);
    }
    return (
        <div>
            <Header></Header>
            <div className="service-container">
                {
                    serviceItems.map(item => <VolunteerItems className="service-items" handleAddActivity={handleAddActivity} item={item} id={item.id}></VolunteerItems>)
                }
            </div>
        </div>
    );
};

export default Home;