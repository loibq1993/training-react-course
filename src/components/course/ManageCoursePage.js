import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        }
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm 
                allAuthors={[]}
                course={this.state.course}
                errors={this.state.errors}
                />
            </div>
        );
    }
}

ManageCoursePage.PropTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isReqruied
};

function mapStateToProps(state, ownProps) {
    let course = {id: '', watchHref: '', title: '', author: '', length:'', category:''}
    const authorsFormatterdForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    } );

    return {
        course: course,
        authors: authorsFormatterdForDropdown
    }
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(courseActions, dispatch)
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
