let students = []
console.log(students)


//3
function addStudent(newStudent){
    students.push(newStudent);
    return `${newStudent} was aded to the student's list.`
}

console.log(addStudent("John"));
console.log(addStudent("Jane"));
console.log(addStudent("Joe"));

//4
function countStudents(){
    return `There are total of ${students.length} students enrolled.`
}

console.log(countStudents())

//5
function printStudents(){

    students.sort();

    students.forEach(
        function(element){
            console.log(element)
        }
    )
}

printStudents()

//6

// function findStudent(studentName){
//     if (students.includes(studentName)){
//         return `${studentName} is an enrollee.`
//     } else return `${studentName} is not an enrollee`
// }
    
// console.log(findStudent(`Joe`))
// console.log(findStudent(`bill`))

function findStudent(keyword){

    students.filter( function(student){

        return student.includes(keyword.toLowerCase())
    })

    if(matchMedia.length == 1){
        console.log(`${match} is an Enrollee`);
        
    } else if(match.length > 1){
        console.log(`${match} are Enrollees`);
    } else {
        console.log(`No student found with name ${match}`)
    }
}
