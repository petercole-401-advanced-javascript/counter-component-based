import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	getNumberColor = (num) => {
		if (num > 0) return { color: 'green' };
		if (num < 0) return { color: 'red' };
		return { color: '#000' };
	};

	onIncrement = (e) => {
		e.preventDefault();
		let change = this.state.number;
		change++;
		this.setState({ number: change });
	};

	onDecrement = (e) => {
		e.preventDefault();
		let change = this.state.number;
		change--;
		this.setState({ number: change });
	};

	// TODO: these could be dried out ^^^

	render() {
		return (
			<div id="counter">
				<p>
					The number is:{' '}
					<span id="number" style={this.getNumberColor(this.state.number)}>
						{this.state.number}
					</span>
				</p>
				<button id="up" onClick={this.onIncrement}>
					UP
				</button>
				<button id="down" onClick={this.onDecrement}>
					DOWN
				</button>
			</div>
		);
	}
}

export default Counter;
