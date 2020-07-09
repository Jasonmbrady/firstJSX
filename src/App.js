import React, { useState } from 'react';
import HookForm2 from './components/HookForm2';
import UserCard2 from './components/UserCard2';




function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <HookForm2
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        pass={pass}
        setPass={setPass}
        confirmPass={confirmPass}
        setConfirmPass={setConfirmPass}
      />
      <UserCard2
        firstName={firstName}
        lastName={lastName}
        email={email}
        pass={pass}
        confirmPass={confirmPass}
      />
    </div>
  )
}

export default App;
