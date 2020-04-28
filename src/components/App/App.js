import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Counter from '../Counter/Counter';
import Footer from '../Footer/Footer';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Counter />
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;
