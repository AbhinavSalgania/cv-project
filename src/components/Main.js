import React from 'react';
import Display from './Display';
import './styles.css';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        fieldOfStudy: '',
        company: '',
        position: '',
        description: ''
      };
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }
  
    render() {
      return (
        <main>
            <div className="information-box">
                <section>
                    <h2>Personal Information</h2>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        onChange= {this.handleChange}
                    />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="johndoe@email.com"
                        onChange= {this.handleChange}
                    />
                    <br />
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        placeholder="xxx-xxx-xxx"
                        onChange= {this.handleChange}              />
                </section>
                <section>
                    <h2>Education</h2>
                    <label htmlFor="school">School:</label>
                    <input
                        type="text"
                        id="school"
                        placeholder="Harvard"
                        onChange= {this.handleChange}              />
                    <br />
                    <label htmlFor="degree">Degree:</label>
                    <input
                        type="text"
                        id="degree"
                        placeholder="Bachelors"
                        onChange= {this.handleChange}              />
                    <br />
                    <label htmlFor="field-of-study">Field of Study:</label>
                    <input
                        type="text"
                        id="field-of-study"
                        placeholder="Gender Studies"
                        onChange= {this.handleChange}              />
                </section>
                <section>
                    <h2>Experience</h2>
                    <label htmlFor="company">Company:</label>
                    <input
                        type="text"
                        id="company"
                        placeholder="Tesla"
                        onChange= {this.handleChange}              />
                    <br />
                    <label htmlFor="position">Position:</label>
                    <input
                        type="text"
                        id="position"
                        placeholder="Robot Maker"
                        onChange= {this.handleChange}              />
                    <br />
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description" 
                        placeholder = "lorem ipsum dolem Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia" 
                        onChange= {this.handleChange}                />
                </section>
            </div>
            <div className = "display-box">
            <Display
                name={this.state.name}
                email={this.state.email}
                phone={this.state.phone}
                school={this.state.school}
                degree={this.state.degree}
                fieldOfStudy={this.state.fieldOfStudy}
                company={this.state.company}
                position={this.state.position}
                description={this.state.description}
                />
            </div>
        </main>
        );
    }
}
    
export default Main;



