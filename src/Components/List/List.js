import React from 'react';
import './List.css'
import deleteLogo from '../../Resource/logos/delete.png'
import { useHistory } from 'react-router-dom';

const List = (props) => {
    //const history = useHistory();
    const { name, email, date, serviceType, _id } = props.item;
    
    return (
            <div className="lists">
                <p className="list-name">{name}</p>
                <p className="list-email">{email}</p>
                <p className="list-date">{date}</p>
                <p className="list-type">{serviceType}</p>
                <button onClick={() => props.handleRemoveUser(_id)} className="list-element delete-btn"><img className="del-logo" src={deleteLogo} alt="" /></button>
            </div>
    );
};

export default List;