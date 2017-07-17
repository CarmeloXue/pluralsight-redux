import * as types from '../actions/actionConst';
import initialState from './initialState';

export default function (state = initialState.authors,action) {
  switch (action.type)
  {
    case types.LOAD_AUTHOR_SUCCESS:
      debugger
      return action.authors
    default:
      return state;
  }
}
