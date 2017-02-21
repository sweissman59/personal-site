import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
import '../css/About.css'

class About extends Component {
	render () {
		return (
			<Well className={"about-container" + (this.props.windowWidth < 700 ? " narrow" : "")}>
				<p>In 1997—in the days of Netscape Navigator and the cutting-edge third edition 
				of The Oregon Trail—my third grade teacher was so ahead of the curve as to assign
				HTML site building to her eight year old students. A few things have changed
				since then. I've tried to keep up.</p>

				<p>I have a love of puzzle solving, whether that's squashing a tricky bug deep in a
				stack of asynchronous callbacks, or figuring out an optimal strategy in a new tabletop
				game. I enjoy learning new systems: programming languages, frameworks, APIs,
				game mechanics, or just how to get the Raspberry Pi to properly configure an Xbox
				controller.</p>

				<p>When I get away from my various screens and into the outdoors, it's often with
				my camera around my neck, backpack full of lenses. The gallery might hint at my
				preferred subjects: birds, bugs, flowers, and pets.</p>

				<p className="bottom">My wife and I live in the Portland area with our mostly tame former tomcat and
				remarkably bouncy puppy.</p>
			</Well>
		);
	}
}

export default About