import { Fragment } from 'react';
   
import { WelcomeMessage } from './WelcomeMessage';
import { ProfileInfo } from './ProfileInfo';
import './App.css';

 export const App = () => {
  return (
    <Fragment>
      <h1>Friend Tracker</h1>
        <div className="content-container">
          <WelcomeMessage/>
          <ProfileInfo/>
        </div>
    </Fragment>
  );
} 


