import React from 'react'


const  Profile = props=>{
    function  handleName (){
        alert (`my name is ${props.fullName}`)
    }
    return(
        <div>
             {props.children }
<p>name:{props.fullName}</p>          
 <p>bio:{props.bio}</p>
 <p>profession: {props.profession}</p>
  {handleName()}
 </div>)
}
Profile.defaultProps={
    profession:"nothing",
}


export default Profile;