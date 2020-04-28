import React from 'react';
import './App.css';
import Footer from '../Footer/index';
import Header from '../Header/index';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0
		};
	}

	handleButtonClick = (e) => {
		e.preventDefault();
		this.setState({ number: Math.floor(Math.random() * 20 + 1) });
	};

	render() {
		return (
			<div>
				<h4>The number is: {this.state.number}</h4>
				<button onClick={this.handleButtonClick}>Click Me</button>
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Main />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
