import React from 'react';
import Resume from './Resume';
import './styles.css';

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        phone: '',
        educationItems: [{ school: "", degree: "", fieldOfStudy: "", FromTo: "" }],
        experienceItems: [{ company: "", position: "", description: "", FromToXp: "" }]
      };
    }

    addEducationItem = () => {
        this.setState((prevState) => ({
            educationItems: [...prevState.educationItems, {
                school: '', degree: '', fieldOfStudy: '', FromTo: ''
            }]
        }));
    };

    deleteEducationItem = (index) => {
        console.log(index)
        this.setState((prevState) => ({
            educationItems: prevState.educationItems.filter((_, i) => i !== index)
        }));
    };

    addExperienceItem = () => { 
        this.setState((prevState) => ({
            experienceItems: [...prevState.experienceItems, {
                company: '', position: '', description: '', FromToXp: ''
            }]
        }));
    };

    deleteExperienceItem = (index) => {
        console.log(index)
        this.setState((prevState) => ({
            experienceItems: prevState.experienceItems.filter((_, i) => i !== index)
        }));
    };
    
    handleChange = (event, arrayType, index) => {
        console.log(index)
        const name = event.target.name;
        const value = event.target.value;

        this.setState((prevState) => {
            const newArray = [...prevState[arrayType]];
            newArray[index] = { ...newArray[index], [name]: value };
            return {
                ...prevState,
                [arrayType]: newArray
            };
        });
    }

    handleChangePersonal = (event) => {
        console.log(event)
        const name = event.target.name;
        const value = event.target.value;
        this.setState((prevState) => ({ ...prevState,   [name]: value })
    );
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
                        name="name"
                        placeholder="John Doe"
                        onChange= {this.handleChangePersonal}             />
                    
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name = "email"
                        placeholder="johndoe@email.com"
                        onChange= {this.handleChangePersonal}             />
                    
                    <br />
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name = "phone"
                        placeholder="xxx-xxx-xxx"
                        onChange= {this.handleChangePersonal}              />
                </section>
            <section>
                <h2>Education</h2>
                {this.state.educationItems.map((item, index) => (
                <div key={index}>
                    <label htmlFor={`school-${index}`}>School:</label>
                    <input
                    type="text"
                    id={`school-${index}`}
                    name="school"
                    placeholder="Harvard"
                    onChange={event => this.handleChange(event, "educationItems", index)}
                    />
                    <br />
                    <label htmlFor={`degree-${index}`}>Degree:</label>
                    <input
                    type="text"
                    id={`degree-${index}`}
                    name="degree"
                    placeholder="Bachelors"
                    onChange={event => this.handleChange(event, "educationItems", index)}
                    />
                    <br />
                    <label htmlFor={`fieldOfStudy-${index}`}>Field of Study:</label>
                    <input
                    type="text"
                    id={`fieldOfStudy-${index}`}
                    name="fieldOfStudy"
                    placeholder="Gender Studies"
                    onChange={event => this.handleChange(event, "educationItems", index)}
                    />
                    <br />
                    <label htmlFor={`FromTo-${index}`}>From/To:</label>
                    <input
                    type="text"
                    id={`FromTo-${index}`}
                    name="FromTo"
                    placeholder="2010-2014"
                    onChange={event => this.handleChange(event, "educationItems", index)}
                    />
                </div>
                ))}
            <div>

            {this.state.educationItems.length > 1 && (
                <button onClick={() => this.deleteEducationItem(this.state.educationItems.length - 1)}>Delete</button>
            )}
            <button onClick={this.addEducationItem}>Add</button>
               
            
            </div>
            
            </section>
        <section>
            <h2>Experience</h2>
            {this.state.experienceItems.map((item, index) => (
              <div key={index}>
                <label htmlFor={`company-${index}`}>Company:</label>
                <input
                  type="text"
                  id={`company-${index}`}
                  name="company"
                  placeholder="Tesla"
                  onChange={event => this.handleChange(event, "experienceItems", index)}
                />
                <br />
                <label htmlFor={`position-${index}`}>Position:</label>
                <input
                  type="text"
                  id={`position-${index}`}
                  name="position"
                  placeholder="Robot Maker"
                  onChange={event => this.handleChange(event, "experienceItems", index)}
                />
                <br />
                <label htmlFor={`description-${index}`}>Description:</label>
                <textarea
                  id={`description-${index}`}
                  name="description"
                  placeholder="lorem ipsum dolem Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia"
                  onChange={event => this.handleChange(event, "experienceItems", index)}
                />
                <br />
                    <label htmlFor={`FromToXp-${index}`}>From/To:</label>
                    <input
                    type="text"
                    id={`FromToXp-${index}`}
                    name="FromToXp"
                    placeholder="2010-2014"
                    onChange={event => this.handleChange(event, "educationItems", index)}
                    />
              </div>
            ))}
        <div>

            {this.state.experienceItems.length > 1 && (
                <button onClick={() => this.deleteExperienceItem(this.state.experienceItems.length - 1)}>Delete</button>
            )}
            <button onClick={this.addExperienceItem}>Add</button>

        </div>
    
        </section>

            </div>
            <div className = "resume-box">
                <Resume
                    name={this.state.name}
                    email={this.state.email}
                    phone={this.state.phone}
                    educationItems={this.state.educationItems}
                    experienceItems={this.state.experienceItems}
                    />
            </div>
        </main>
        );
    }
      
}
    
export default Main;



