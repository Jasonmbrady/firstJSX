import React from 'react';

const HookForm = (props) => {

    const { state, setState } = props;
    const changeVal = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" onChange={changeVal} />
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="lastName" onChange={changeVal} />
            </div>
            <div>
                <label>E-Mail</label>
                <input type="text" name="email" onChange={changeVal} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange={changeVal} />
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name="confirmPassword" onChange={changeVal} />
            </div>
        </form>
    );


}

export default HookForm;