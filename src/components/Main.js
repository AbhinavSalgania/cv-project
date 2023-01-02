import React from 'react';

const Main = () => {
  return (
    <main>
        <div className="information-box">
            <section>
                <h2>Personal Information</h2>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <br />
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" />
            </section>
            <section>
                <h2>Education</h2>
                <label htmlFor="school">School:</label>
                <input type="text" id="school" />
                <br />
                <label htmlFor="degree">Degree:</label>
                <input type="text" id="degree" />
                <br />
                <label htmlFor="field-of-study">Field of Study:</label>
                <input type="text" id="field-of-study" />
            </section>
            <section>
                <h2>Experience</h2>
                <label htmlFor="company">Company:</label>
                <input type="text" id="company" />
                <br />
                <label htmlFor="position">Position:</label>
                <input type="text" id="position" />
                <br />
                <label htmlFor="description">Description:</label>
                <textarea id="description" />
            </section>
        </div>
    </main>
  );
}

export default Main;



