import * as types from '../actions/actionType';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) { //export default can import any. if not default so have to use {importState}
    switch (action.type) {
        case types.LOAD_COURSES_SUCCESS:
            // state.push(action.course);
            return action.courses;
        
        default:
            return state;
    }
}