import React from 'react';

class NameRegistration extends React.Component {

    constructor (props) {
        super(props);
        this.handleNameRegistration = this.handleNameRegistration.bind(this);
    }

    handleNameRegistration() {
        //above parameter argument was event when it was working
        //this.props.onNameChange(event.target.value)
        this.props.onNameChange(document.getElementById('nameInput').value)
    }

    render() {
        return (
            // PROPS PASSING CORRECTLY <span>{this.props.nameRegistration}</span>
            <div>
            <span>Register your name here: </span> <br/>
            <input id='nameInput' defaultValue={''} 
                    //onChange={this.handleNameRegistration} this changes App state successfully
            />
            <button onClick={this.handleNameRegistration}> 
                Enter
            </button>
            </div>
        )
    }
} 

export default NameRegistration;