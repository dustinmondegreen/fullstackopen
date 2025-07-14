const Course = ({course}) => {
  console.log(course)
  const courses = course.parts.map(
    (courses) => (<li key={courses.id}>{courses.name} {courses.exercises}</li>)
  )
  return(
    <div>
      <h1>{course.name}</h1>
      <ul>
        {courses}
      </ul>
      <p>total of {course.parts.reduce((x, course) => (x + course.exercises), 0)}</p>
    </div>
  )
}

export default Course