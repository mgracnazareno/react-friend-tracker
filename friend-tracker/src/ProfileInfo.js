import { Fragment } from 'react';
import { myProfileData } from  './data';
import './ProfileInfo.css';

export const ProfileInfo =() => { 
    return (
        <Fragment>
            <div className="profile-pic-container">
                <div className="profile-pic-wrap">
                    <img 
                        className="profile-pic"
                        src= {process.env.PUBLIC_URL + './Profile-pic.png'}
                        alt= {`${myProfileData.name}is wearing red t-shirt`}/>
                </div>
            </div>
            <h2 className="content-heading">My Profile </h2> 
            <h3>Name</h3>
            <p>{myProfileData.name}</p>
            <h3>Age</h3>
            <p>{myProfileData.age}</p>
            <h3>Bio</h3>
            <p>{myProfileData.bio}</p>
            <h3>Birthday</h3>
            <p>{myProfileData.birthday}</p>
            <h3>Interests</h3>
            <p>{myProfileData.interests.join(', ')}</p>
        </Fragment>     
    )
}