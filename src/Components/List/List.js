import React from 'react';
import './List.css'
import deleteLogo from '../../Resource/logos/delete.png'
import { useHistory } from 'react-router-dom';

const List = (props) => {
    //const history = useHistory();
    const { name, email, date, serviceType, _id } = props.item;
    // function deleteProduct(_id){
    //     //console.log(event.target.parentNode);
    //     fetch('http://localhost:5000/admin?_id=' + _id, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         if(result){
    //             alert('Deleted successfully!');
    //             //history.push('/admin');
    //         }
    //     })
    //     //console.log(id);
    // }
    return (
            <div className="lists">
                <p className="list-name">{name}</p>
                <p className="list-email">{email}</p>
                <p className="list-date">{date}</p>
                <p className="list-type">{serviceType}</p>
                <button className="list-element delete-btn"><img className="del-logo" src={deleteLogo} alt="" /></button>
            </div>
    );
};

export default List;