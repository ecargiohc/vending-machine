import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Sardines.css';
import Message from './Message';
 
class Sardines extends Component {
    render() {
        return(
            <div className="SARDINES!"
                style={{backgroundImage:"url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"}}>
                <Message>
                    <h2>Sardines are nutrition-packed! Good choice :)</h2>
                    <Link to='/'>Go Home</Link>
                </Message>
            </div>
        )
    }
}
export default Sardines;