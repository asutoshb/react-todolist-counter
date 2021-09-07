import React, { useState } from 'react';
const Todos = () => {

    const [text, setText] = useState('');
    const [todosList, setTodoList] = useState([]);

    const handleChange = (e)=>{
       // console.log("input box changed", e.target.value);
        setText(e.target.value);
    };

    const addTodoList = ()=>{
        const payload = {status: false, title: text}
        setTodoList([...todosList, payload]);
        setText('');
        //setTodoList(todosList.concat(text));
    }

    return <div>
        <input value={text} onChange={handleChange} type="text" placeholder="Add todo"/>
        <button onClick={addTodoList}>Add</button>
        {todosList.map(e => <div>{e.title} :- {e.status?"Done":"Not Done"}</div>)}
    </div>
};

export default Todos;