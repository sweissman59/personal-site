import React, { Component } from 'react'
import { Well } from 'react-bootstrap'
import '../css/Resume.css'
import PDF from 'react-pdf-js'

class Resume extends Component {
	render () {
		return (
		<Well className="resume-container">
			<object id="resume-pdf" type="application/pdf" data="/SamWeissman-HohlerResume.pdf">
				<img id="resume-png" src="/SamWeissman-HohlerResume.png" />
			</object>
		</Well>
		)
	}
}

export default Resume