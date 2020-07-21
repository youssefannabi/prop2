import React from 'react';
import PropTypes from 'prop-types';

import Profile from './profile/Profile.js';
function App() {
  return (
    <div style={{
      backgroundColor:"antiquewhite"
    }}>
    <div style ={{
      marginLeft:'609px',
      fontSize:'30px',
      fontFamily: "initial",
      marginRight:'591px',
    }} >
    <Profile fullName="Youssef annabi " bio="hello .... ">
      <img src="img.jpg" alt="me" width="235px"  />
    </Profile>
    </div>
    </div>
  );
}

Profile.propTypes = {
  bio: PropTypes.string ,
  fullName: PropTypes.string,
  profession : PropTypes.string,
};


export default App;
