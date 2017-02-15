import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Gallery from './Gallery.js'
import About from './About.js'
import Resume from './Resume.js'
import { Button, ButtonGroup } from 'react-bootstrap'

class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
      page: 'gallery'
    };
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
          <h2>Sam Weissman-Hohler</h2>
          <ButtonGroup id='navButtons'>
          	<Button className='navButton' active={this.state.page === 'gallery'} onClick={() => this.navClick('gallery')}>Gallery</Button>
          	<Button className='navButton' active={this.state.page === 'about'} onClick={() => this.navClick('about')}>About</Button>
          	<Button className='navButton' active={this.state.page === 'resume'} onClick={() => this.navClick('resume')}>Resume</Button>
          </ButtonGroup>
        </div>
        {display}
      </div>
    )
  }
}

export default App
