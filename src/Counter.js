import React, { useState , useEffect } from 'react'
import './App.css'

const Counter = () => {
    const [count,setCount] = useState (0)
    const [subTitle,setSubtitle] = useState ('Count me in :)')

    const increaseCount = (count) => {
        const newCount = count+1;
        return (
            setCount(newCount),
            setSubtitle('Count me in :)')
        )
    }

    const decreaseCount = (count) => {
        const newCount = count-1;
        
        return (
         setCount(newCount),
         setSubtitle('Count me out :(')
        );
    }

    useEffect(() => {
        document.title =  `Count is ${count}`
    },[count])

    return (
        <>
        <h1>{subTitle}</h1>
        <div className="container"> 
           <p className="button" onClick={e=>decreaseCount(count)}> - </p> 
           <p className="count"> {count} </p>
           <p className="button" onClick={e=>increaseCount(count)}> + </p> 
        </div>
        </>
    )
}

export default Counter;
