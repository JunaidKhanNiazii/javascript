// object in API 

// concept 1 
let course = {
    course : "Javascript",
    price : "999",
    courseInstructor : "hitesh"
}

console.log(course.courseInstructor)
// {} it mean destructuring it. 
const {courseInstructor} = course // is main us ka course ka object sa extrect kar ka kia ya ka har bar course. na likna para 
const {courseInstructor : istructor} = course 
console.log(courseInstructor)
console.log(istructor)

// we use in react like 
// const navbar = ({company}) => {
//    }
// navbar(company = "hitesh")


 