import React from 'react';
import {Link} from 'react-router'

class GeneralNotFoundPage extends React.Component{
  render(){
    return(
      <div>
        <h1>Sorry the Content is Not Found</h1>
        <p>please make sure the content you looking for is real</p>
        <Link to="/" className="btn btn-primary">Go Back</Link>
      </div>
    )
  }
}

export default GeneralNotFoundPage;
