import React, {Component} from 'react';
import './Message.css';

class Message extends Component {
    render() {
        return(
            <div className="Message">
                {/* this refers to whatever may be nested inside the wrapped 'Message' div in other components */}
                {this.props.children}
            </div>
        )
    }
}
export default Message;