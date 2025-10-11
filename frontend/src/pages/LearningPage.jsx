import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
const backendURL = import.meta.env.VITE_BACKEND_URL;


const LearningPage = () => {
  const {user} = useAuth;
  const [courses, setCourses] = useState([]);
  const [isLoading , setIsLoading ]= useState(false);

  // fetch courses from get courses endpoint 
  useEffect(() => {

    const getMyCourses = async () => {
      setIsLoading(true);
      try{
      const config = {
        headers : {
          Authorization : `Bearer ${user}`
        }
      }
     const myCourses =  await axios.get(backendURL +  "/api/courses/my-courses", config);
     setCourses(myCourses);
    }
    catch(error){
        console.error("error fetching data", error.message)
    }
    finally{
      setIsLoading(false);
    }
  }
    if(user){
    getMyCourses();
    }
  


  }, [user]);

  if(isLoading) return <p>Loading your courses</p>

  return (
    <>
    <h1>My learning Center</h1>
    <div className="row">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <div className="col-md-4 mb-4" key={course._id}>
              <div className="card shadow-sm h-100 border-0">
                {course.image && (
                  <img
                    src={course.image}
                    className="card-img-top"
                    alt={course.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text text-muted mb-3">
                    {course.instructor || "Instructor: Unknown"}
                  </p>
                  <Link
                    to={`/learn/courses/${course._id}`}
                    className="btn btn-primary mt-auto"
                  >
                    Continue learning
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted fs-5">
            No courses found. Enroll in a course to get started!
          </div>
        )}
      </div>
    </>
  )
}

export default LearningPage