import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './component/App';
import HomePage from './component/home/HomePage';
import AboutPage from './component/about/AboutPage';
import AuthorPage from './component/author/AuthorPage';
import CoursesPage from './component/courses/CoursesPage';
import GeneralNotFoundPage from './component/NotFound/GeneralNotFoundPage'
import ManageCoursePage from './component/courses/ManageCoursePage'

export default (
  <Route path="/" component={App}>
    <IndexRoute name="HomePage" component={HomePage}></IndexRoute>
    <Route name="about" path="about" component={AboutPage}></Route>
    <Route name="author" path="author" component={AuthorPage}></Route>
    <Route name="courses" path="courses" component={CoursesPage}></Route>
    <Route name="course" path="course" component={ManageCoursePage}></Route>
    <Route name="course" path="course/:id" component={ManageCoursePage}></Route>
    <Route path="*" component={GeneralNotFoundPage}></Route>
  </Route>
)
