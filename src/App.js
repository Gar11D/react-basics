// https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/

import React from 'react';
import './App.css';

import ChangeColorButton from './ChangeColorButton';
import NameRegistration from './NameRegistration';

class App extends React.Component {
  //Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      nameRegistration: ''
    }

    this.updateRegisteredName = this.updateRegisteredName.bind(this);
  }

  updateRegisteredName(name) {
    this.setState({nameRegistration: name})
  }

  // componentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then ((resolution) => resolution.json())
    .then ((jsonResponse) => {
      this.setState ({
        items: jsonResponse,
      })
    })
  }

  render() {
    const { items } = this.state;
    return ( 
      <div className = "App">
        <h1> Fetch data from an api in react </h1>  {
            items.map((item) => ( 
            <ol key = { item.id } >
                User_Name: { item.username }, 
                Full_Name: { item.name }, 
                User_Email: { item.email } 
                </ol>
            ))
        }
        <br/>
        <ChangeColorButton />
        <br/>
        <br/>
        <NameRegistration nameRegistration={this.state.nameRegistration}
                          onNameChange={this.updateRegisteredName}
        />
        <h2>The name you registered is: {this.state.nameRegistration}</h2>
      </div> 
    )
  }


}

export default App;
