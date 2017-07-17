import React,{Component, PropTypes} from 'react';
import Header from './Header'

class App extends Component{
  render(){
    return(
      <div className="container-fluid">
        <Header/>
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children:PropTypes.object.isRequired
};

export default App
