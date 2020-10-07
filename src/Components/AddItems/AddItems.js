import React from 'react';
import './AddItems.css';
import fakeData from '../../fakeData/Items'
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventDetails = {data};
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Event added successfully!');
            }
        })
    };



    // const product = {};
    // const handleAddProduct = () => {
    //     fetch('http://localhost:5000/addActivity', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(product)
    //     })
    // }
    return (
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="container-label">Add event</h3>
            <div className="input-container">
                <div>
                    <h6 className="des-label">Event Title</h6>
                    <input name="serviceType" ref={register({ required: true })} placeholder="Enter title" className="input-block" />
                    {errors.name && <span className="error">Event title is required</span>}
                    {/* <label className="des-label" htmlFor="">Description</label> */}
                    <h6 className="des-label">Description</h6>
                    <input name="Description" className="des-box" ref={register({ required: true })} placeholder="Enter description" />
                    {errors.name && <span className="error">Description is required</span>}
                </div>
                <div>
                    <h6 className="des-label">Date</h6>
                    <input name="Date" className="input-block date-block" ref={register({ required: true })} placeholder="Enter date" />
                    {errors.name && <span className="error">Description is required</span>}
                </div>
            </div>
            <input type="submit" className="submit-btn"/>
            {/* <button className="submit-btn">Submit</button> */}
        </form>

    );
};

export default AddItems;