import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Chips.css';
import imgSrc from './Chips.png';
import Message from './Message';

class Chips extends Component {
    constructor(props){
        super(props);
        this.state = {
            // bags: 0
            bags: []
        }
    }
    
    // eat = () => {
    //     this.setState({
    //         bags: this.state.bags + 1
    //     })
    // };

    handleClick = () => {
        const x = window.innerWidth * Math.random();
        const y = window.innerHeight * Math.random();
        this.setState(prevState => ({
            bags: [...prevState.bags, {x,y}]
        }))    
    };

    render() {
        const mapBags = this.state.bags.map((bag, i) => (
            <img 
            key={i}
            src={imgSrc}
            className="bag"
            style={{top: `${bag.y}px`, left: `${bag.x}px`}}
            alt="Lays Potato Chips"
            />
        ))
        return(
            <div className="Chips">
                {/* <img src={imgSrc} alt="Lays Potato Chips"/> */}
                <Message>
                    <h2>A chip a day, keeps the muscle away...</h2>
                    <Link to='/'>Go Home</Link>
                </Message>
                    <h2>Consumption total: {this.state.bags.length}</h2>
                    {/* <button onClick={this.eat}>OMNOMNOM!</button> */}
                    <button className="button" onClick={this.handleClick}>NOMNOMNOM!</button>
                    {mapBags}
            </div>
        )
    }
}
export default Chips;