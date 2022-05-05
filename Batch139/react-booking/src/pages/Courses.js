import { Fragment, useContext, useEffect, useState } from "react"
import AdminView from "../components/AdminView"
// import courseData from "../data/courseData"

// components
import CourseCard from "../components/CourseCard"
import UserView from "../components/UserView"
import UserContext from "../UserContext"

export default function Courses(){

    const [courses, setCourses] = useState([])
    const {user} = useContext(UserContext)
    console.log(user)

    // console.log(courseData)
    // const courses = courseData.map(course => {
    //     return(
    //         <CourseCard key={course.id} courseProp={course}/>
    //     )
    // })

    const fetchData = ()=> {
        fetch("http://localhost:4000/api/courses")
        .then(response => response.json())
        .then(data => {
            console.log(data)

            setCourses(data)
        })
    }

    console.log(user.isAdmin)
    useEffect(()=> {
        fetchData()
    }, [])

    console.log(courses)
    return(
        <Fragment>
            {
                (user.isAdmin === true) ?
                    <AdminView courseData = {courses} fetchData={fetchData} />
                :
                    <UserView courseData={courses} />
            }
        </Fragment>
    )
}