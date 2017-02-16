import React, { Component } from 'react'
import './static/css/App.css'
import Gallery from './static/js/Gallery.js'
import About from './static/js/About.js'
import Resume from './static/js/Resume.js'
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
          <h1>Sam Weissman-Hohler</h1>
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
