import React from 'react';

const UserCard = ({ state }) => {

    return (
        <div>
            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.lastName}</p>
            <p>E-Mail: {state.email}</p>
            <p>Password: {state.password}</p>
            <p>Confirm Password: {state.confirmPassword}</p>
        </div>
    );
}

export default UserCard