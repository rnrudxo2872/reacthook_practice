import { useState } from 'react'

const UserInput = (initValue, isValid) => {
    const [value, setValue] = useState(initValue)
  
    const onChange = (event) => {
      const {target} = event;
  
      const curValue = target.value;
      let isExec = false
      if(typeof isValid === "function"){
        isExec = isValid(curValue);
      }
      if(isExec){
        setValue(curValue);
      }
    }
  
    return{value,onChange}
  }

export default function UseInput(){
    const isValid = (value) => value.length < 5;
    const nameState = UserInput("now",isValid)

    return(
        <div>
            <input {...nameState}/>
        </div>
    )
}