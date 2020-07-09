import React, { Component } from "react"

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }
    render() {
        const { firstName, lastName, hairColor } = this.props;
        const age = this.state.age;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {age}</h3>
                <h3>Hair Color: {hairColor}</h3>
                <button onClick={() => { this.setState(state => ({ age: age + 1 })) }}>
                    Birthday button for {firstName} {lastName}
                </button>
            </div >
        );
    }
}
export default PersonCard;