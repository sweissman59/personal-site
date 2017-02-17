import React, { Component } from 'react'
import './static/css/App.css'
import Gallery from './static/js/Gallery.js'
import About from './static/js/About.js'
import Resume from './static/js/Resume.js'
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
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

    let socialButtons = [
      <Button key="github-button" className="btn-social-icon btn-github" href="https://github.com/sweissman59" aria-label="Github"><span className="fa fa-github"></span></Button>,
      <Button key="linkedin-button" className="btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/sam-weissman-hohler" aria-label="Linked In"><span className="fa fa-linkedin"></span></Button>,
      <Button key="twitter-button" className="btn-social-icon btn-twitter" href="https://twitter.com/tacroy47" aria-label="Twitter"><span className="fa fa-twitter"></span></Button>,
      <Button key="flickr-button" className="btn-social-icon btn-flickr" href="https://www.flickr.com/photos/phixional_ninja/" aria-label="Flickr"><span className="fa fa-flickr"></span></Button>
    ];
    if ($(window).width() < 410) {
      socialButtons = (
        <DropdownButton id="social-dropdown" className="fa fa-bars" aria-label="Social Media">
          { socialButtons.map(function(button, index) {
            let href = button.props.href;
            button = React.cloneElement(button, {href: null});
            return (<MenuItem key={index} href={ href }>{ button }</MenuItem>)
          }) }
        </DropdownButton>
      )
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1>Sam Weissman-Hohler</h1>
          <ButtonGroup id='navButtons'>
            <Button className='navButton' active={this.state.page === 'gallery'} onClick={() => this.navClick('gallery')}>Gallery</Button>
            <Button className='navButton' active={this.state.page === 'about'} onClick={() => this.navClick('about')}>About</Button>
            <Button className='navButton' active={this.state.page === 'resume'} onClick={() => this.navClick('resume')}>Resume</Button>
            { socialButtons }
          </ButtonGroup>
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
