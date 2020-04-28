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
					The Number:{' '}
					<span
						id="number"
						class="font-strong"
						style={this.getNumberColor(this.state.number)}
					>
						{this.state.number}
					</span>
				</p>
				<div>
					<button class="font-strong" onClick={this.onIncrement}>
						↑
					</button>
				</div>
				<div>
					<button class="font-strong" onClick={this.onDecrement}>
						↓
					</button>
				</div>
			</div>
		);
	}
}

export default Counter;
