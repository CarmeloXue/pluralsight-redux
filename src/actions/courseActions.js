import * as types from './actionConst';
import courseApi from "../api/mockCourseApi";

export function createCourseSuccess(course) {
  return{
    type:types.CREATE_COURSE,
    course
  }
}

export function updateCourseSuccess(course) {
  return {
    type:types.UPDATE_COURSE_SUCCESS,
    course
  }
}

export function loadCourseSuccess(course){
  return{
    type:types.LOAD_COURSES_SUCCESS,
    course
  }
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses().then(course=>{
      dispatch(loadCourseSuccess(course))
    })
      .catch(error=>{
        throw (error)
      })
  }
}

export function saveCourse(course) {
  return (dispatch,getState) =>{
    return courseApi.saveCourse(course)
      .then(saveRsp=>{
        course.id ? dispatch(updateCourseSuccess(saveRsp)):dispatch(createCourseSuccess(saveRsp))
      })
      .catch(err=>{
        throw (err)
      })
  }
}
