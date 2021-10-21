import react from "react";
import useInput from "../hooks/use-Input";

const BasicForm = (props) => {
  const nameUseInput = useInput();
  const lastNameUseInput = useInput();
  const emailUseInput = useInput();
  const { valueHandler: nameHandler, touch: nameTouch, validValue: nameValidValue, validInput: nameValidInput,
    valueChangeHandler: nameValueChangeHandler,
    blurHandler: nameBlurHandler } = nameUseInput

  const { valueHandler: emailValueHandler, touch: emailTouch, validValue: emailValidValue, validInput: emailValidInput, valueChangeHandler: emailValueChangeHandler, blurHandler: emailBlurHandler } = emailUseInput;

  const { valueHandler: lastNameValueHandler, touch: lastNameTouch, validValue: lastNameValidValue, validInput: lastNameValidInput, valueChangeHandler: lastNameValueChangeHandler, blurHandler: lastNameBlurHandler } = lastNameUseInput;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const data = { nameHandler, lastNameValueHandler }
    console.log(data)
  }

  const nameError = nameValidInput ? 'form-control invalid' : 'form-control';
  const lastNameError = lastNameValidInput ? 'form-control invalid' : 'form-control';
  const emailError=emailValidInput ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameError}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={nameValueChangeHandler} onBlur={nameBlurHandler} />
          {nameValidInput && <p className='error-text'>Invalid Name</p>}
        </div>
        <div className={lastNameError}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameValueChangeHandler} onBlur={lastNameBlurHandler} />
          {lastNameValidInput && <p className='error-text'>Invaid Last Name</p>}

        </div>
      </div>
      <div className={emailError}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onBlur={emailBlurHandler} onChange={emailValueChangeHandler} />
        {emailValidInput && <p className='error-text'>Invalid e-mail</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;