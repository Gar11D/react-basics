import React from 'react';
import './ChangeColorButton.css';

class ChangeColorButton extends React.Component {
    
    constructor (props) {
        super(props)
    }
    
    handleChangeColor() {
        //let currentColor = 
        //document.getElementById("buttonId").style.backgroundColor; doesn't work, need value of prop
        
        const changeColor = () => {
            return (
            document.getElementById("buttonId").style.backgroundColor === 'blue' ?
            document.getElementById("buttonId").style.backgroundColor = 'blueviolet' :
            document.getElementById("buttonId").style.backgroundColor = 'blue'
            );
        }

        changeColor();
    }

    render () {
        return (
            <button className="colorButton" id="buttonId" onClick={this.handleChangeColor}>
                CHANGE COLOR BUTTON 
            </button>
            //<button onClick={handleChangeColor}>Click here to change colour!</button>
        )
    }
}

export default ChangeColorButton;