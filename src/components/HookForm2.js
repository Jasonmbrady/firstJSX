import React from "react";

const HookForm2 = (props) => {
    const { firstName, setFirstName, lastName, setLastName, email, setEmail, pass, setPass, confirmPass, setConfirmPass } = props;

    return (
        <form>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>E-Mail:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
            </div>
        </form>
    );
}

export default HookForm2;