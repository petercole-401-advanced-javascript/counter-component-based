import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

class Main extends Component {
	render() {
		return <App />;
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
