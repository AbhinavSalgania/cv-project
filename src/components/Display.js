import React from 'react';
import './styles.css';

class Display extends React.Component {
  render() {
    const{
        name, email, phone, school, degree, 
        fieldOfStudy, company, position, description }
        = this.props;

    return (
        <div className="display">
            <h1>{name}</h1>
            <p> Email: {email} </p>
            <p> Phone: {phone} </p>
            <h2>Education</h2>
            <p> School: {school} </p>
            <p> Degree: {degree} </p>
            <p> Field of Study: {fieldOfStudy} </p>
            <h2>Experience</h2>
            <p> Company: {company} </p>
            <p> Position: {position} </p>
            <p> Description: {description} </p>
        </div>
    );
    }
}

export default Display;
