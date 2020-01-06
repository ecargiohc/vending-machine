import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Soda.css';
import imgSrc from './Soda.png';
import Message from './Message';

class Soda extends Component {
    render() {
        return(
            <div className="Soda">
                <img src={imgSrc} alt="Coca-Cola"/>
                <Message>
                    <h2>Think of the polar bears</h2>
                    <Link to='/'>Go Home</Link>
                </Message>
                <img src={imgSrc} alt="Coca-Cola"/>
            </div>
        )
    }
}
export default Soda;