import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap'
import $ from 'jquery'
import '../css/NavBar.css'

class NavBar extends Component {
	render () {
		let socialButtons = [
			<Button key="github-button" className="btn-social-icon btn-github" href="https://github.com/sweissman59" aria-label="Github"><span className="fa fa-github"></span></Button>,
			<Button key="linkedin-button" className="btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/sam-weissman-hohler" aria-label="Linked In"><span className="fa fa-linkedin"></span></Button>,
			<Button key="twitter-button" className="btn-social-icon btn-twitter" href="https://twitter.com/tacroy47" aria-label="Twitter"><span className="fa fa-twitter"></span></Button>,
			<Button key="flickr-button" className="btn-social-icon btn-flickr" href="https://www.flickr.com/photos/phixional_ninja/" aria-label="Flickr"><span className="fa fa-flickr"></span></Button>
		];
		if ($(window).width() < 410) {
			socialButtons = (
				<DropdownButton id="social-dropdown" className="fa fa-bars" aria-label="Social Media" title="">
					{ socialButtons.map(function(button, index) {
						let href = button.props.href;
						button = React.cloneElement(button, {href: null});
						return (<MenuItem key={index} href={ href }>{ button }</MenuItem>)
					}) }
				</DropdownButton>
			)
		}

		return (<ButtonGroup id='navButtons'>
			<Button className='navButton' active={this.props.page === 'gallery'} onClick={() => this.props.navClick('gallery')}>Gallery</Button>
			<Button className='navButton' active={this.props.page === 'about'} onClick={() => this.props.navClick('about')}>About</Button>
			<Button className='navButton' active={this.props.page === 'resume'} onClick={() => this.props.navClick('resume')}>Resume</Button>
			{ socialButtons }
		</ButtonGroup>)
	}
}

export default NavBar