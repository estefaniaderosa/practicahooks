import React, { useState } from 'react'
import './App.css'

const Counter = () => {
    const [count,setCount] = useState (0)
    const [jokeTitle,setJoketitle] = useState ('Count me in :)')

    const increaseCount = (count) => {
        const newCount = count+1;
        return (
            setCount(newCount),
            setJoketitle('Count me in :)')
        )
    }

    const decreaseCount = (count) => {
        const newCount = count-1;
        
        return (
         setCount(newCount),
         setJoketitle('Count me out :(')
        );
    }

    return (
        <>
        <h1>{jokeTitle}</h1>
        <div className="container"> 
           <p className="button" onClick={e=>decreaseCount(count)}> Decrease </p> 
           <p className="count"> {count} </p>
           <p className="button" onClick={e=>increaseCount(count)}> Increase </p> 
        </div>
        </>
    )
}

export default Counter
