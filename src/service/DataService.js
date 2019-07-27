import axios from 'axios'

const INSTRUCTOR = 'testuser'
const COURSE_API_URL = 'http://35.247.152.93:8080'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`

class DataService {

    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }


    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/courses/${id}`);
    }

    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/courses/${id}`, course);
    }

    createCourse(name, course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/courses/`, course);
    }

    retrieveAllStudents(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/students`);
    }
    
    retrieveStudent(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/students/${id}`);
    }
    createStudent(name, student) {
        console.log('**  Creating student')
        console.log(student)
        return axios.post(`${INSTRUCTOR_API_URL}/students/`, student);
    }
    deleteStudent(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/students/${id}`);
    }
    updateStudent(name, id, student) {
        console.log('executed service')
        return axios.put(`${INSTRUCTOR_API_URL}/students/${id}`, student);
    }

}

export default new DataService()
