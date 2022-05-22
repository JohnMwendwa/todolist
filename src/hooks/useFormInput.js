import {useState} from 'react'

function useFormInput(defaultVal) {
    //set state 
    const [state,setState] = useState(defaultVal);

      //change state when input changes"
      const handleChange = (e)=>{
        setState(e.target.value);
    }

 //reset state back to empty
 const reset = ()=>{
    setState('');
}

//return the current state,method to hange state change and a method to reset it
return [state,handleChange,reset];

}

export default useFormInput