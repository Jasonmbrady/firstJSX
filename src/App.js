import React, { useState } from 'react';
import HookForm from "./components/HookForm"
import UserCard from "./components/UserCard"


function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <HookForm state={state} setState={setState} />

      <UserCard state={state} />

    </div>
  )
}

export default App;
