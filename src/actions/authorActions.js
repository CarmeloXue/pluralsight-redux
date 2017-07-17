import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionConst'

export function loadAuthorsSuccess(authors) {
  debugger
  return {
    type:types.LOAD_AUTHOR_SUCCESS,
    authors
  }
}

export function loadAuthors() {
  return dispatch =>{
    return AuthorApi.getAllAuthors()
      .then(authors=>{
        debugger
        dispatch(loadAuthorsSuccess(authors))
      })
      .catch(error=>{
        throw (error)
      })
  }
}

