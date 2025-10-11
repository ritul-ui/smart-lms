import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LessonPlayerPage = () => {
    const {id: courseId} = useParams();
    const [course , setCourse] = useState(null);
    const [isLoading, setIsloading] = useState(false);
    const [activeLesson, setActiveLesson] = useState(null);
    const {user} = useAuth();
    
    // fetch course details agains course id
    useEffect(() => {
        const getCourseDetails = async () => {
            try {
                setIsloading(true)
                const courseDetails = await axios.get(`${BACKEND_URL}/api/courses/${courseId}`)
                setCourse(courseDetails);
            } catch (error) {
                console.error('Error fetching my courses!', error.message)
            } finally {
                setIsloading(false)
            }
        }

        if (user) getCourseDetails();
    }, [courseId]);

    if (isLoading) return <p>Loading course contents...</p>
    if (!course) return <p>Course content not found!</p>


  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '300px', borderRight: '1px solid #ccc' }}>
        <h2>{course.title}</h2>
        {course.modules.map((module, index) => (
          <div key={module._id}>
            <h4>Module {index + 1}: {module.title}</h4>
            <ul>
              {module.lessons.map(lesson => (
                <li 
                  key={lesson._id} 
                  onClick={() => setActiveLesson(lesson)}
                  style={{ cursor: 'pointer', fontWeight: activeLesson?._id === lesson._id ? 'bold' : 'normal' }}
                >
                  {lesson.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
      
      <main style={{ flex: 1, padding: '2rem' }}>
        {activeLesson ? (
          <div>
            <h2>{activeLesson.title}</h2>
            <p>Welcome to the Course!</p>
            <div style={{ background: '#000', color: '#fff', height: '400px', display: 'grid', placeContent: 'center' }}>
              Video Player for: {activeLesson.videoUrl || 'No Video'}
            </div>
          </div>
        ) : (
          <h2>Select a lesson to begin.</h2>
        )}
      </main>
    </div>
  );

}

export default LessonPlayerPage