import React, { useEffect, useState } from 'react'
import useInput from "../hooks/use-Input"

function SimpleInput() {
  const {value:enteredName,hasEror:nameInputHasError,valueChangeHandler:nameChangeHandler,inputBlurHandler:nameBlurHandler,valueIsValid:nameValueIsValid}=useInput(value=>value!=="")
  const [nameHendler, setNameHendler] = useState("");
  const [ageHendler, setAgeHendler] = useState("");
  const [emailHendler, setEmailHendler] = useState("");
  var form_button = true

  const ageIsValid = ageHendler != "";
  const emailIsValid = emailHendler != "";

  const [ageTouch, setAgeTouch] = useState(false);
  const [emailTouch, setEmailTouch] = useState(false);

  const ageError = !ageIsValid && ageTouch
  const emailError = !emailIsValid && emailTouch;


  const ageChangeHandler = (event) => {
    setAgeHendler(event.target.value)
  }
  const emailChangeHandler = (event) => {
    setEmailHendler(event.target.value)
  }

  // const nameInputBlurHandler = () => {
  //   setNameTouch(true)
  // }
  // const ageInputBlurHandler = () => {
  //   setAgeTouch(true)
  // }
  // const emailInputBlurHandler = () => {
  //   setEmailTouch(true)
  // }


  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      
      age: ageHendler,
      email: emailHendler
    }
    if (!nameValueIsValid || !ageIsValid || !emailIsValid) {
      setEmailTouch(true)
      setAgeTouch(true)
      
      return;
    }
    console.log(data)
  }
  const InvalidName=nameInputHasError?'form-control invalid':'form-control'
  const Invalidage = ageError ? 'form-control invalid' : 'form-control'
  const InvalidEmail = emailError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={InvalidName}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler} />
        {InvalidName && <p className="error-text">Enter Valid Name</p>}
      </div>
      <div className={Invalidage}>
        <label htmlFor='age'>Your age</label>
        <input type='number' id='name' value={ageHendler} onChange={ageChangeHandler} />
        {ageError && <p className="error-text">Enter Valid Age</p>}
      </div>
      <div className={InvalidEmail}>
        <label htmlFor='email'>Your E-mail</label>
        <input type='email' id='name' value={emailHendler} onChange={emailChangeHandler}/>
        {emailError && <p className="error-text">Enter Valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!form_button}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
