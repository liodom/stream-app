import React from 'react';
import { Link } from 'react-router-dom';


const StreamList = () => {
   return(
      <div>
         StreamList
         <br />
         <button><Link to='/streams/new'> StreamCreate </Link></button>
         <button><Link to='/streams/delete'> StreamDelete </Link></button>
         <button><Link to='/streams/edit'> StreamEdit </Link></button>
         <button><Link to='/streams/show'> StreamShow </Link></button>
      </div>
   );
}

export default StreamList;