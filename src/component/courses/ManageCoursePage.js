import React, {PropTypes,Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as courseAction from '../../actions/courseActions';
import CourseForm from './CourseForm'

class ManageCoursePage extends Component {

    constructor(props,context) {
        super(props,context);
        this.state = {
          course:Object.assign({},this.props.course),
          errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    componentWillReceiveProps(nextProps){
    if(this.props.course.id != nextProps.course.id)
    {
      this.setState({course:Object.assign({},nextProps.course)});
    }
  }

    onChange(event){
      const name = event.target.name;
      let course = this.state.course;
      course[name] = event.target.value;

      this.setState({course:course});
    }

    onSave(event){
      event.preventDefault();
      this.props.actions.saveCourse(this.state.course);
      this.context.router.push('/courses');
    }

    render() {
        return (
            <CourseForm
              course={this.state.course}
              errors={this.state.errors}
              onChange={this.onChange}
              onSave={this.onSave}
              allAuthors={this.props.authors}/>
        );
    }
}

ManageCoursePage.propTypes = {
  course:PropTypes.object.isRequired,
  authors:PropTypes.array,
  onChage:PropTypes.func,
  onSave:PropTypes.func,
  actions:PropTypes.object
};

ManageCoursePage.contextTypes = {
  router:PropTypes.object
}

function getCourseById(courses,courseId) {
  const course = courses.filter(course=>courseId === courseId);
  if(course) return course[0];
  return null;
}

const mapStateToProps = (state,ownProps) => {
  const courseId = ownProps.params.id;
  let course = {id:"",watchHref:"",title:"",authorId:"",length:"",category:""};
  if(courseId && state.course.length > 0)
  {
    course = getCourseById(state.course,courseId);
  }

  const authorsFormattedForDropDown = state.author.map(author => {
    return {
      value:author.id,
      text:author.firstName + " " + author.lastName
    }
  });

  return {
    course:course,
    authors:authorsFormattedForDropDown
  };
};

const mapDispatchToProps = dispatch => {
    return {
        actions:bindActionCreators(courseAction,dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
