import React from 'react';
import { Link } from 'react-router-dom';

const StreamEdit = () => {
   return(
      <div>
         StreamEdit
         <br />
         <button><Link to='/streams/new'> StreamCreate </Link></button>
         <button><Link to='/streams/delete'> StreamDelete </Link></button>
         <button><Link to='/'> StreamList </Link></button>
         <button><Link to='/streams/show'> StreamShow </Link></button>
      </div>
   );
}

export default StreamEdit;