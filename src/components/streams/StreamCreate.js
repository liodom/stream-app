import React from 'react';
import { Link } from 'react-router-dom';

const StreamCreate = () => {
   return(
      <div>
         StreamCreate
         <br />
         <button><Link to='/streams/delete'> StreamDelete </Link></button>
         <button><Link to='/streams/edit'> StreamEdit </Link></button>
         <button><Link to='/'> StreamList </Link></button>
         <button><Link to='/streams/show'> StreamShow </Link></button>
      </div>
   );
}

export default StreamCreate;