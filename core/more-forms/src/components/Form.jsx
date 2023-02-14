import React, { useState } from "react";

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefualt();

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  //first name restrictions

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is needed");
    } else if (e.target.value.length < 2) {
      setFirstNameError("First name must be 2 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setFirstNameError("");
    }
  };

  //last name restrictions

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is needed");
    } else if (e.target.value.length < 2) {
      setLastNameError("Last name must be 2 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setLastNameError("");
    }
  };

  //email restrictions

  const handlEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is needed");
    } else if (e.target.value.length < 2) {
      setEmailError("Email must be 2 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setEmailError("");
    }
  };

  //password restrictions

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is needed");
    } else if (e.target.value.length < 2) {
      setPasswordError("Password must be 8 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setPasswordError("");
    }
  };

  //confirm password restrictions

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmPasswordError("Confirm Password is needed");
    } else if (confirmPassword === password) {
      setConfirmPasswordError("Passwords must match");
    } else {
      // an empty string is considered a "falsy" value
      setConfirmPasswordError("");
    }
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <div className="inputs">
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={handleFirstName} />
          {firstNameError ? <p>{firstNameError}</p> : ""}
        </div>

        <div className="inputs">
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={handleLastName} />
          {lastNameError ? <p>{lastNameError}</p> : ""}
        </div>

        <div className="inputs">
          <label>Email Address: </label>
          <input type="text" value={email} onChange={handlEmail} />
          {emailError ? <p>{emailError}</p> : ""}
        </div>

        <div className="inputs">
          <label>Password: </label>
          <input type="text" value={password} onChange={handlePassword} />
          {passwordError ? <p>{passwordError}</p> : ""}
        </div>

        <div className="inputs">
          <label>Confirm Password: </label>
          <input
            type="text"
            value={confirmPassword}
            onChange={handleConfirmPassword}
          />
          {confirmPasswordError ? <p>{confirmPasswordError}</p> : ""}
        </div>
      </form>
    </div>
  );
};

export default Form;
