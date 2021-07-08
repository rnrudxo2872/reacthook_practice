import { useState, useEffect } from "react"

const useTitle = (initTitle) => {
    const [title, setTitle] = useState(initTitle);

    const updateTitle = () => {
        document.querySelector("title").innerText = title;
    }
    useEffect(updateTitle,[title])
    return setTitle;
}