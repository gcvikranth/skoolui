import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DataService from '../service/DataService';

const INSTRUCTOR = 'testuser'

class StudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            studentName:'',
            schoolName:''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        DataService.retrieveStudent(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                studentName: response.data.studentName,
                schoolName: response.data.schoolName
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.studentName) {
            errors.studentName = 'Enter a Name of the Student'
        } else if (values.studentName.length < 5) {
            errors.studentName = 'Enter atleast 5 Characters in Description'
        }

        return errors

    }

    onSubmit(values) {
        let username = INSTRUCTOR

        let student = {
            id: this.state.id,
            studentName: values.studentName,
            schoolName: values.schoolName
        }

        if (this.state.id === -1) {
            console.log("calling Create");

            DataService.createStudent(username, student)
                .then(() => this.props.history.push('/students'))
        } else {
            console.log("calling update");
            DataService.updateStudent(username, this.state.id, student)
                 .then(() => this.props.history.push('/students'))
        }

        console.log(values);

    }

    render() {

        let { schoolName,studentName, id } = this.state

        return (
            <div>
                <h3>Students</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, studentName,schoolName }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="studentName" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Student Name</label>
                                        <Field className="form-control" type="text" name="studentName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>School Name</label>
                                        <Field className="form-control" type="text" name="schoolName" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default StudentComponent