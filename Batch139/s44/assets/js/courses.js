console.log("courses")

let admin = localStorage.getItem("isAdmin")

let courseData;
let cardFooter;

let adminButton = document.getElementById("adminButton")

if(admin == false || admin == null){

    adminButton.innerHTML = null

    // fetch only active courses

} else {

    adminButton.innerHTML =
    `
    <div class="col-md-2 mt-4 offset-md-10">
    <a href="./createCourse.html" class="btn btn-primary">Create Course</a>
    </div>
    `
    // course container

    fetch("http://localhost:4000/api/courses/")
    .then(response => response.json())
    .then(response => {
        console.log(response) //array of courses objects


        //what if array is empty?
        if(response.length < 1){

            courseData = 'No Courses Available'
        } else {
            //how to display these courses

            courseData = response.map( (course) => {
                console.log(course)

                if(admin){
                
                }

                if(course.isActive){
                    cardFooter =
                    `
                    <a href="./archiveCourse.html?courseId=${course._id}" class="btn btn-danger btn-block">
                        Archive Course
                    </a>
    
                    <a href="./editCourse.html?courseId=${course._id}" class="btn btn-primary btn-block">
                        Edit Course
                    </a>
    
                    <a href="./deleteCourse.html?courseId=${course._id}" class="btn btn-secondary btn-block">
                        Delete Course
                    </a>
    
                    `
                } else {
                    cardFooter =
                    `    
                    <a href="./unarchiveCourse.html?courseId=${course._id}" class="btn btn-success btn-block">
                        Unarchive Course
                    </a>

                    <a href="./editCourse.html?courseId=${course._id}" class="btn btn-primary btn-block">
                        Edit Course
                    </a>
                    
                    <a href="./deleteCourse.html?courseId=${course._id}" class="btn btn-secondary btn-block">
                        Delete Course
                    </a>
    
                    `
                }

                return (
                    //dsiplaying the data in a card
                    `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${course.courseName}</h5>
                        <p class="card-text text-left">${course.description}</p>
                        <p class="card-text text-right">price: ${course.price}</p>
                        <div class="card-footer">${cardFooter}</div>
                    </div>
                  </div>
                  `
                )
            }).join(" ")
            let container = document.getElementById("courseContainer");

            container.innerHTML = courseData
        }
    })
}