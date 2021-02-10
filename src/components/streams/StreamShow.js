import React from 'react';
import { Link } from 'react-router-dom';


const StreamShow = () => {
   return(
      <div>
         StreamShow
         <br />
         <button><Link to='/streams/new' >StreamCreate</Link></button>
         <button><Link to='/streams/delete' >StreamDelete</Link></button>
         <button><Link to='/streams/edit'>StreamEdit</Link></button>
         <button><Link to='/'>StreamList</Link></button>
      </div>
   );
}

export default StreamShow;