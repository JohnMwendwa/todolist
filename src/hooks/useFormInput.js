import {useState} from 'react'

function useFormInput(defaultVal) {
    //set state 
    const [state,setState] = useState(defaultVal);

      //change state when input changes"
      const handleChange = (e)=>{
        setState(e.target.value);
    }

   return

}

export default useFormInput