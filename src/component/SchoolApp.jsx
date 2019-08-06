import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';
import StudentComponent from './StudentComponent';
import ListStudentsComponent from './ListStudentsComponent';
import SideBar from '../sidebar'
class SchoolApp extends Component {
    render() {
        return (
            
            <Router>

                <>
                    <h1>After School Activity Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                        <Route path="/students/:id" component={StudentComponent} />
                        <Route path="/students" component={ListStudentsComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default SchoolApp