import React, { Component } from 'react'
import Courses from '../../courses'

export default class DashboardCourses extends Component {
	render () {
			return (
				<article className="Main-container">
					<Courses/>
				</article>
		)
	}
}