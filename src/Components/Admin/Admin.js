import React, { useContext, useState } from 'react';
import './Admin.css';
import logo from '../../Resource/logos/Group 1329.png';
import vrlLogo from '../../Resource/logos/users-alt 1.png'
import plusLogo from '../../Resource/logos/plus 1.png'
import AddItems from '../AddItems/AddItems';
import VolunteerList from '../VolunteerList/VolunteerList';
import { UserContext } from '../../App';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [showResults, setShowResults] = useState(false);
    const onClickEvent = () => setShowResults(true);
    const onClickList = () => setShowResults(false);

    return (
        <div className="container">
            <div className="right-half">
            <img
                        src={logo}
                        width="200"
                        height="60"
                        className="d-inline-block align-top main-logo"
                        alt="React Bootstrap logo"
                    />
                    <br/>
                    <button onClick={onClickList}  className="admin-btn"><img className="admin-logo" src={vrlLogo} alt=""/>Volunteer register list</button>
                    <br/>
                    <button onClick={onClickEvent} className="admin-btn"><img className="admin-logo" src={plusLogo} alt=""/>Add event</button>


            </div>
            <div className="left-half">
                {
                    showResults ? <AddItems></AddItems> : <VolunteerList ></VolunteerList>
                }
            </div>
        </div>
    );
};

export default Admin;