import React from "react";

const UserCard2 = (props) => {

    const { firstName, lastName, email, pass, confirmPass } = props;
    return (
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>E-Mail: {email}</p>
            <p>Password: {pass}</p>
            <p>Confirm Password: {confirmPass}</p>
        </div>
    );
}

export default UserCard2;