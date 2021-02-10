import React from 'react';
import {Link} from 'react-router-dom';

const StreamDelete = () => {
   return(
      <div>
         StreamDelete
         <br />
         <button><Link to='/streams/new'> StreamCreate </Link></button>
         <button><Link to='/streams/edit'> StreamEdit </Link></button>
         <button><Link to='/'> StreamList </Link></button>
         <button><Link to='/streams/show'> StreamShow </Link></button>
      </div>
   );
}

export default StreamDelete;