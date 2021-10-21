import react, { useState } from "react";

const useInput = () => {
    const [valueHandler, setValueHandler] = useState("")
    const [touch, setTouch] = useState(false)
    const validValue = valueHandler != ""
    const validInput = !validValue && touch

    const valueChangeHandler = (event) => {
        setValueHandler(event.target.value)
    }
    const blurHandler = () => {
        setTouch(true)
    }

    return ({
        valueHandler,
        touch,
        validValue,
        validInput,
        valueChangeHandler,
        blurHandler,
    })

}

export default useInput;