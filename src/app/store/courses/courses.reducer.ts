import { Action, createReducer } from '@ngrx/store';

// Add your code here

export interface CoursesState {
    // Add your code here
allCourses:any
course:any
isAllCoursesLoading:boolean
isSingleCourseLoading:boolean
isSearchState:boolean
errorMessage:string
}

export const initialState: CoursesState = {
    // Add your code here
allCourses:'',
course:'',
isAllCoursesLoading:true,
isSingleCourseLoading:true,
isSearchState:true,
errorMessage:''
};

export const coursesFeatureKey = 'courses';

export const coursesReducer = createReducer(initialState); // Add your code here

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
