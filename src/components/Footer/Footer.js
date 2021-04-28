import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
    };
  }
  render() {
    return (
      <div id="footer">
        <footer>
          <p>
            <small>&copy; Peter Cole {this.state.year}</small>
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
