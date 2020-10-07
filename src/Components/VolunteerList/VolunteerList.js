import React, { useEffect, useState } from 'react';
import List from '../List/List';
import './VolunteerList.css'

const VolunteerList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/lists')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    return (
        <div >
            <h3 className="label">Volunteer register list</h3>
            <div className="list-container">
                <div className="list-label">
                    <h6 className="margin">Name</h6>
                    <h6 className="margin-email">Email ID</h6>
                    <h6 className="margin-rd">Registration Date</h6>
                    <h6 className="margin">Volunteer List</h6>
                    <h6 className="margin">Action</h6>
                </div>

            </div>
            <div>
            {
                list.map(item => <List item={item} key={item._id}> </List>)
            }
            </div>
        </div>
    );
};

export default VolunteerList;