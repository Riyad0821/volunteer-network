import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import List from '../List/List';
import './VolunteerList.css'

const VolunteerList = () => {
    const history = useHistory();
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://fast-brushlands-49939.herokuapp.com/lists')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    function handleRemoveUser(id){
        fetch('https://fast-brushlands-49939.herokuapp.com/admin?_id=' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Deleted successfully!');
                history.push('/admin');
                
            }
        })
    }

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
                list.map(item => <List handleRemoveUser={handleRemoveUser} item={item} key={item._id}> </List>)
            }
            </div>
        </div>
    );
};

export default VolunteerList;