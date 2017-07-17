import React,{PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({content})=>{
  return (
    <tr>
      <td><a href={content.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'course/' + content.id}>{content.title}</Link></td>
      <td>{content.authorId}</td>
      <td>{content.category}</td>
      <td>{content.length}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  content:PropTypes.object.isRequired
}

export default CourseListRow;
