import React from 'react';

const Main = () => {
  return (
    <main>
        <div className="information-box">
            <section>
                <h2>Personal Information</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="John Doe" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder="johndoe@email.com" />
                <br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" placeholder="xxx-xxx-xxx"/>
            </section>
            <section>
                <h2>Education</h2>
                <label htmlFor="school">School:</label>
                <input type="text" id="school" placeholder="Harvard" />
                <br />
                <label htmlFor="degree">Degree:</label>
                <input type="text" id="degree" placeholder="Bachelors" />
                <br />
                <label htmlFor="field-of-study">Field of Study:</label>
                <input type="text" id="field-of-study" placeholder="Gender Studies"  />
            </section>
            <section>
                <h2>Experience</h2>
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" placeholder="Tesla" />
                <br />
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" placeholder="Robot Maker" />
                <br />
                <label htmlFor="description">Description:</label>
                <textarea id="description" placeholder = "lorem ipsum dolem Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia" />
            </section>
        </div>
    </main>
  );
}

export default Main;



