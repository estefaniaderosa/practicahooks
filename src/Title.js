import React, { useState }  from 'react';


const Title = () => {

    const [title,setTitle] = useState('Hi Im Title, type to change me :)');

    const changeTitle = (newTitle) => {
       setTitle(newTitle);
    };

    if (title === ''){
        return setTitle(':) Hi there again');
    }

    return (
        <>
            <h1>{title}</h1>
            <input className="input" type="text" onChange={e => changeTitle(e.target.value)}></input>
        </>
    )
}

export default Title;
