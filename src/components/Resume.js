import React from 'react';
import './styles.css';

class Resume extends React.Component {
  render() {
    const{
        name, email, phone, educationItems, experienceItems
        } = this.props;

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
          {educationItems.map((item, index) => (
            <div key={index}>
              <p>School: {item.school}</p>
              <p>Degree: {item.degree}</p>
              <p>Field of Study: {item.fieldOfStudy}</p>
            </div>
          ))}   
        </section>
            <section>
                <h2>Experience</h2>
                {experienceItems.map((item, index) => (
            <div key={index}>
              <p>Company: {item.company}</p>
              <p>Position: {item.position}</p>
              <p>Description: {item.description}</p>
            </div>
            ))}
            </section>
    </div>
    );
    } 
}  

export default Resume;
