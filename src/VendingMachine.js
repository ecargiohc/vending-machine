import React, {Component} from 'react';
import './VendingMachine.css';
import imgSrc from './VendingMachine.png';
import Message from './Message';
import {Link} from 'react-router-dom';

class VendingMachine extends Component {
    render() {
        return(
            <div className="VendingMachine"
            style={{backgroundImage: `url(${imgSrc})`}}>
                <Message>
                    {/* this is the 'child' of Message: 'Props.children' */}
                    <h1>Hello, I'm the Vending Machine!</h1>
                </Message>
                <Message>
                    <h3>What would you like to consume today?</h3>
                </Message>
                <Message>
                    <Link to='/Chips'>Chips!</Link>
                    <Link to='/Soda'>Soda!</Link>
                    <Link to='/Sardines'>Sardines!</Link>
                </Message>
            </div>
        )
    }
}
export default VendingMachine;