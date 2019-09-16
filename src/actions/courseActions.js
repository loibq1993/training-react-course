import * as types from './actionType';
import courseAPI from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses() {
    return function(dispatch) {
        return courseAPI.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}