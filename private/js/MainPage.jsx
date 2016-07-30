import React from 'react';
import FlatButton from 'material-ui/FlatButton';

class MainPage extends React.Component{

    constructor(props){
      super(props);
      this.state = {
				message : "Hello"
      }
    }

    render(){
      return (
        <div>
					<h1>
						{this.state.message}
					</h1>		
        </div>
      );
    }
}

export default MainPage;
