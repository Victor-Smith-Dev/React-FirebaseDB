import React from 'react'
import Course from './Course'
import './CourseList.css'

/**
* Cuando un component no tiene estados no es necesario declararlo como una clase, este se debe declarar como una 
* constante y se exporta al final 
*/
const CoursesList = ( props ) => (
	<ul className="CoursesList">
		{
			props.courses.map( course => (
					<Course 
						key = { course.id } 
						id = { course.id }
						name = { course.name }
						teacher = { course.teacher }
						poster = { course.poster }
						url = { course.url }
						amount = { course.amount }
						date = { course.date }
						categories = { course.categories }
					/>
			) ).reverse()
		}
	</ul>
) 

export default CoursesList
