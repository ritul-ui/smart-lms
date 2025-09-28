import axios from "axios";
import {useEffect, useState } from "react";
import {useParams} from "react-router-dom";

const backendURL = "http://localhost:3002"

export default function CourseDetail(){
    const [course, setCourse] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const {id : courseId} = useParams();
    console.log(courseId);

    // call the get courses api 
    useEffect(() => {
        const fetchCourseById = async () => {
            try{
                const response = await axios.get(backendURL + "/api/courses/" + courseId);
                console.log("response", response.data);
                //save into state
                setCourse(response.data);
                console.log("course detail", response.data);
            }catch(error){
                    console.error("error", error);
                    setError("course not found");
            }finally{
                setIsLoading(false);
            }
        }
        fetchCourseById();
    }, [courses])

    if(isLoading) return <p>Loading course details</p>
    if(error) return <p>Course not found</p>

    console.log("courses", course);

    return (
        <>
        {course ? (
            <>
  <h1>Title : {course.title}</h1>
        <p>description : {course.description}</p>
        <p>price : {course.price}</p>
        <p>instructor : {course.instructor.name}</p>
        <p>category : {course.category.name} </p>
        <button>Add to cart</button>
        <button>Buy now</button>
        </>
        ) : (
<>
<h1>Course not found</h1>
</>
        )}
      
        </>
    )
}