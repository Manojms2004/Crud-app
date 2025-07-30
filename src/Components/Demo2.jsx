import React, { useEffect, useState } from "react";

export default function Demo2(props){

    const person = props.sentData;
    const [getArray,setArray] = useState([]);

    useEffect(()=>{
        const filterdArray = person.filter((people) => people.age >=20)
        setArray(filterdArray)
    })
    return(
        <div>{
            getArray.map((e)=>{
                return <ul>
                    <li>{e.name}</li>
                    <li>{e.age}</li>
                    <li>{e.gender}</li>
                </ul>
            })
        }</div>
    )
}