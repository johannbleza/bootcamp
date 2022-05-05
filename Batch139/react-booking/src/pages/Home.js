import { Fragment } from "react"
import Banner  from "../components/Banner"
import Highlights from "../components/Highlights"
import CourseCard from "../components/CourseCard"
import Courses from "./Courses"

export default function Home() {

    return(
        <Fragment>
            <Banner />
            <Highlights /> 
            <Courses/>
        </Fragment>
    )
}