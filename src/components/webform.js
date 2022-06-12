import './Table.css';


function Webform() {
    console.log("hhh");
    return (
        <div>
            <form action="https://www.google.com">
                <h1>
                    Form
                </h1>
                <label>Name</label>
                <input type="text" name="name" required />
                <br />
                <label>Age</label>
                <input type="number" name="age" required />
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
                <input type="text" required />
                <br />
                <label>Mobile No.</label>
                <input type="number" required />
                <br />
                <label>Email ID</label>
                <input type="Email" required />
                <br />
                <label>Gender</label>
                <label><input type="radio" name="radiobutton" cheked="true" />Male</label>
                <label><input type="radio" name="radiobutton" />Female</label>
                <br />
                <label>Address</label>
                <input type="text" />
                <br />

                <button type="submit">Submit</button>

                <button type="reset">Reset</button>
                <div >
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
            </form>
        </div>
    );
};

export default Webform;