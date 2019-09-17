import * as types from './actionType';
import courseAPI from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCoursesSuccess(courses) {
    return { type: types.CREATE_COURSES_SUCCESS, courses};
}

export function updateCoursesSuccess(courses) {
    return { type: types.UPDATE_COURSES_SUCCESS, courses};
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

export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseAPI.saveCourse(course).then(course => {
            course.id ? dispatch (updateCoursesSuccess(course)) :
            dispatch(createCoursesSuccess(course));
        }).catch(error => {
            throw(error);
        })
    }
}