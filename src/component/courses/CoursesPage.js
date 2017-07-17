import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import CourseList from './courseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component{
  constructor(props,context){
    super(props,context);

    this.state = {
      course:{title:""}
    }
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }


  render(){
    debugger;
    const {course} = this.props;
    return(
      <div>
        <h1>Course</h1>
        <input
          type="submit"
          value="Add Course"
          className="btn btn-primary"
          onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={course}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions:React.PropTypes.object.isRequired,
  course:React.PropTypes.array.isRequired
};

function mapStateToProps(state,ownProps) {
  debugger;
  return {
    course:state.course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:bindActionCreators(courseAction,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
