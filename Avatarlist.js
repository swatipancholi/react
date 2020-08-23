import React from 'react';
const Avatarlist = (props) =>{
    return(
         <div className="Avatarstyle ma4 bg-light-purple dib pa3 grow shadow-4">
     <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="Avatar"/>
    <h1 className="tc">{props.name} </h1>
    <p className="tc">{props.work}</p>
    </div>
    )
}
export default Avatarlist;