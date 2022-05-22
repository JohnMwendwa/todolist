import { useEffect, useReducer } from 'react'


function useLocalStorageReducer(key,defaultVal,reducer) {
  const [state,dispatch] = useReducer(reducer,defaultVal,()=>{
   let val;
   try{
    //parse localstorage to find items matching the current key a key or return the defaultVal string
    val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));

   }catch(e){
     val = defaultVal;
   }
   return val;
    });
  
    useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(state));
    },[key,state]);

  return [state,dispatch];
}

export default useLocalStorageReducer
