import { useEffect, useRef } from "react";

const UserClick = onClick => {
    const element = useRef();

    useEffect(() => {
        if (element.current){
            element.current.addEventListener("click",onClick);
        }
        return () => {
            if(element.current){
                element.current.removeEventListener("click",onClick)
            }
        }
    },[])

    return element;
}