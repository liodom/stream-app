import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';

// const PageOne = () => {
//    return(
//       <div>
//          PageOne
//          <br />
//          <button><Link to="/pagetwo">Go to Page Two</Link></button>
//       </div>
//    );
// }
// const PageTwo = () => {
//    return(
//       <div>
//          PageTwo
//          <br />
//          <button><Link to='/'>Go to Page One</Link></button>
//       </div>
//    );
// }

const App = () => { 
   return(
      <div className="ui container">
         <BrowserRouter>
         <div>
            <Header />
            <Route path='/' exact={true} component={StreamList} />
            <Route path='/streams/new' exact={true} component={StreamCreate} />
            <Route path='/streams/edit' exact={true} component={StreamEdit} />
            <Route path='/streams/delete' exact={true} component={StreamDelete} />
            <Route path='/streams/show' exact={true} component={StreamShow} />
            
         </div> 
         </BrowserRouter>
      </div>
      )
}

export default App;