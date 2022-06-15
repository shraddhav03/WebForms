import './Table.css';

import React, { useState } from 'react';

// import userEvent from '@testing-library/user-event';

function Webform() {

    const [enteredName, setName] = useState({
        name: "", age: "", email: "", qualification: "", number: "", address: ""
    });

    let name, value;

    const handleInputs = (e) => {
        console.log(e);

        name = e.target.name;
        value = e.target.value;



        setName({ ...enteredName, [name]: value })
    }

    return (
        <div>
            <form >
                <h1>
                    Form
                </h1>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={enteredName.name}
                    onChange={handleInputs}
                />
                <br />
                <label>Age</label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    value={enteredName.age}
                    onChange={handleInputs} />
                <br />
                <label>Occupation</label>
                <select>
                    <option value="Govt"> Govt </option>
                    <option value="Private">Private</option>
                    <option value="Professional">Professional</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <label>Qualification</label>
                <input
                    type="text"
                    name="qualification"
                    id="qualification"
                    value={enteredName.qualification}
                    onChange={handleInputs} />
                <br />
                <label>Mobile No.</label>
                <input
                    type="number"
                    name="number"
                    id="number"
                    value={enteredName.number}
                    onChange={handleInputs} />
                <br />
                <label>Email ID</label>
                <input
                    type="Email"
                    name="email"
                    id="email"
                    value={enteredName.email}
                    onChange={handleInputs} />
                <br />
                <label>Gender</label>
                <label><input type="radio" name="radiobutton" />Male</label>
                <label><input type="radio" name="radiobutton" />Female</label>
                <br />
                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    value={enteredName.address}
                    onChange={handleInputs} />
                <br />

                <button type="submit" >Submit</button>

                <button type="reset">Reset</button>
            </form>
            <div id="tablediv" >
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                        <th>Qulification</th>
                        <th>Mobile No.</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Webform;