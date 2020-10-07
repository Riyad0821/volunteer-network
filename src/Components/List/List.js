import React from 'react';
import './List.css'
import deleteLogo from '../../Resource/logos/delete.png'

const List = (props) => {
    const { data, _id } = props.item;
    return (
            <div className="lists">
                <p className="list-element">{data.name}</p>
                <p className="list-element">{data.email}</p>
                <p className="list-element">{data.date}</p>
                <p className="list-element">{data.serviceType}</p>
                <button className="list-element delete-btn"><img className="del-logo" src={deleteLogo} alt="" /></button>
            </div>
    );
};

export default List;