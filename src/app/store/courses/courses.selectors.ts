import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoursesState } from './courses.reducer';
const getCoursesState = createFeatureSelector<CoursesState>('courses');

  export const isAllCoursesLoadingSelector = createSelector(
    getCoursesState,
    (courseState: CoursesState) => courseState.isAllCoursesLoading
  );
  
  export const isSearchingStateSelector = createSelector(
    getCoursesState,
    (courseState: CoursesState) => courseState.isSearchState
  );
  
  export const isSingleCourseLoadingSelector = createSelector(
    getCoursesState,
    (courseState: CoursesState) => courseState.isSingleCourseLoading
  );
  
  export const getCourses = createSelector(
    getCoursesState,
    (courseState: CoursesState) => courseState.allCourses
  );
  
  export const getAllCourses = createSelector(
    getCoursesState,
    (courseState: CoursesState) => courseState.allCourses
  );
  
  export const getCourse = createSelector(
    getCoursesState,
    (courseState: CoursesState) => courseState.course
  );
  
  export const getErrorMessage = createSelector(
    getCoursesState,
    (courseState: CoursesState) => courseState.errorMessage
  );

// Add your code here
