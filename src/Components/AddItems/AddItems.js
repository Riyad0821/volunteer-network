import React from 'react';
import './AddItems.css';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        const eventDetails = {...data};
        fetch('https://fast-brushlands-49939.herokuapp.com/addEvent', {
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
    //     fetch('https://fast-brushlands-49939.herokuapp.com/addActivity', {
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
                    <input name="description" className="des-box" ref={register({ required: true })} placeholder="Enter description" />
                    {errors.name && <span className="error">Description is required</span>}
                </div>
                <div>
                    <h6 className="des-label">Date</h6>
                    <input name="date" className="input-block date-block" ref={register({ required: true })} placeholder="Enter date" />
                    {errors.name && <span className="error">Description is required</span>}
                    <input name="bgColor" className="input-block extra" ref={register({ required: true })} defaultValue="blue" placeholder="color" />
                    {errors.name && <span className="error">Color is required</span>}
                    <input name="img" className="input-block extra" ref={register({ required: true })} defaultValue="https://i.imgur.com/TiHwVp2.png" />
                    {errors.name && <span className="error">Color is required</span>}
                </div>
            </div>
            <input type="submit" className="submit-btn"/>
            {/* <button className="submit-btn">Submit</button> */}
        </form>

    );
};

export default AddItems;