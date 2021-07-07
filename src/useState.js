import { useState } from 'react'
import UseInput from './useState/userInput'; 

const content = [
    {
        title:"userInput",
        content:<UseInput />
    },
    {
        title:"userTab",
        content:""
    }
]

const GetContent = (initIdx) => {
    const [selectNum, setSelect] = useState(initIdx);

    return {curItem:content[selectNum], setSelect}
}

export default function UseState(){
    const {curItem, setSelect} = GetContent(0);

    return(
        <div>
            <div>
                {content.map((value,idx) => {
                    return <button onClick={() => setSelect(idx)}>{value.title}</button>
                })}
            </div>
            <h1>UseState - {curItem.title}</h1>
                {curItem.content}
            <div>

            </div>
        </div>
    )
}