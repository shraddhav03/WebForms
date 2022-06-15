import './Table.css';

import React, { useState } from 'react';

import userEvent from '@testing-library/user-event';

function Webform() {

    const [enteredName, setName] = useState[{
        name: " ", age: " ", email: " ", qualification: " ", number: " ", address: " "
    }];

    let name, value;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setName({ ...userEvent, [name]: value })
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
                    value={enteredName.name}
                    onchange={handleInputs}
                />
                <br />
                <label>Age</label>
                <input type="number" name="age"
                    value={enteredName.name}
                    onchange={handleInputs} />
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
                <input type="text"
                    name="qualification"
                    value={enteredName.name}
                    onchange={handleInputs} />
                <br />
                <label>Mobile No.</label>
                <input type="number"
                    name="number"
                    value={enteredName.name}
                    onchange={handleInputs} />
                <br />
                <label>Email ID</label>
                <input type="Email"
                    name="email"
                    value={enteredName.name}
                    onchange={handleInputs} />
                <br />
                <label>Gender</label>
                <label><input type="radio" name="radiobutton" cheked="true" />Male</label>
                <label><input type="radio" name="radiobutton" />Female</label>
                <br />
                <label>Address</label>
                <input type="text"
                    name="address"
                    value={enteredName.name}
                    onchange={handleInputs} />
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