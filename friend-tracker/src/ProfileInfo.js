import { myProfileData } from  './data';

export function ProfileInfo() { 
    return (
        <div>
            <img
              src= {process.env.PUBLIC_URL + './Profile-pic.png'}
              alt= "Mary is wearing red t-shirt"
              height= "190"/>
              <h2>My Profile </h2>
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
        </div>
    )
}