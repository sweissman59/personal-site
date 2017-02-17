import React, { Component } from 'react'
import './static/css/App.css'
import Gallery from './static/js/Gallery.js'
import About from './static/js/About.js'
import Resume from './static/js/Resume.js'
import NavBar from './static/js/NavBar.js'

import $ from 'jquery'

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			page: 'gallery',
			width: 0
		};
	}

	updateWidth () {
		this.setState({width: $(window).width()});
	}

	navClick (page) {
		this.setState({page: page});
	}

	render () {
		let display = null;
		if (this.state.page === 'gallery') {
			display = <Gallery />;
		} else if (this.state.page === 'about') {
			display = <About />;
		} else if (this.state.page === 'resume') {
			display = <Resume />;
		}

		return (
			<div className="App">
				<div className="App-header">
					<h1>Sam Weissman-Hohler</h1>
					<NavBar page={this.state.page} navClick={this.navClick.bind(this)}/>
				</div>
				{display}
			</div>
		)
	}

	componentWillMount () {
		this.updateWidth();
	}

	componentDidMount () {
		var self = this;
		$(window).resize(function () {
			self.updateWidth();
		});
	}
}

export default App
