import React,{PropTypes} from 'react';
import CourseListRow from './courseListRow';

const CourseList = ({courses,deleteCourse})=>{
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {
        courses.map(course =>
          <CourseListRow key={course.id} content={course}></CourseListRow>
        )
      }
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses:PropTypes.array.isRequired
}
export default CourseList
