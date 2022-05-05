import React, { useEffect, useState } from 'react'
import CourseCard from './CourseCard'

const UserView = ({courseData}) => {
    console.log(courseData) //array of objects
    
    const [courses, setCourses] = useState([])

    useEffect(()=> {

        const courseArr = courseData.map( course => {
            console.log(course)
            if(course.isActive === true){
                return(
                    <CourseCard courseProp={course} key={course._id}/>
                )
            }else {
                return null
            }
        })

        setCourses(courseArr)
    }, [courseData])
    
    console.log(courses)
    return (
        <div>
            <h1> Hello from UserView Component</h1>
        </div>
    )
}

export default UserView
