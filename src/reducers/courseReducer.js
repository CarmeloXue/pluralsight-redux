import * as types from '../actions/actionConst';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses,action) {
  switch (action.type)
  {
    case types.CREATE_COURSE:
      debugger;
      return [...state,Object.assign({},action.course)];
    case types.LOAD_COURSES_SUCCESS:
      debugger;
      return action.course;
    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course=>course.id !== action.course.id),
        Object.assign({},action.course)
      ];
    default:
      return state;
  }
}
