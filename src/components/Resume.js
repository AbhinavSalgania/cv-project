import React from 'react';
import './styles.css';

class Resume extends React.Component {
  render() {
    const{
        name, email, phone, school, degree, 
        fieldOfStudy, company, position, description }
        = this.props;
    return (
        <div className="resume-box">
            <h1>Resume</h1>
            <section>
                <h2>Personal Information</h2>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </section>
            <section>
                <h2>Education</h2>
                <p>School: {school}</p>
                <p>Degree: {degree}</p>
                <p>Field of Study: {fieldOfStudy}</p>
            </section>
            <section>
                <h2>Experience</h2>
                <p>Company: {company}</p>
                <p>Position: {position}</p>
                <p>Description: {description}</p>
            </section>
        </div>
    );
    } 
}  

export default Resume;
