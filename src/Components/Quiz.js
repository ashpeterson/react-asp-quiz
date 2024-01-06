import React, { useContext } from "react";
import useStateContext  from "../Hooks/useStateContext";

export default function Quiz(){

    const {context, setContext} = useStateContext()

    //setContext({timeTaken: 1})

    console.log(context);
    return (
        <div>Question</div>
    )
}