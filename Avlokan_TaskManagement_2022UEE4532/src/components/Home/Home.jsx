import React, { useState } from 'react'
import "./Home.css"


function Home() {
    const [todo,setTodo]=useState([]);
    const [currtodo,setcurrtodo]=useState([]);

    const [inprg,setInprg]=useState([]);
    const [currinprg,setcurrinprg]=useState([]);

    const [finished,setFinished]=useState([]);
    const [currFinish,setcurrFinish]=useState([]);

  return (
    <div>
        <div className="container">
            <div className='To-Do'>
                <h2>To-Do</h2>
                {
                    todo.map((e)=>(
                        <li>{e}</li>
                    ))
                }
                <input onChange={(e)=>setcurrtodo(e.target.value)} value={currtodo} type="text" />
                <button onClick={(e)=>setTodo(...todo,currtodo)}>Add Task</button>
                <button>Delete Task</button>

            </div>
            <div className='In-Progress'>
                <h2>In Progress</h2>
                {
                    inprg.map((e)=>(
                        <li>{e}</li>
                    ))
                }
                <input onChange={(e)=>setcurrinprg(e.target.value)} value={currinprg} type="text" />
                <button onClick={(e)=>setcurrinprg(...todo,currtodo)}>Add Task</button>
                <button>Delete Task</button>

            </div>
            <div className='Done'>
                <h2>Done</h2>
                {
                    finished.map((e)=>(
                        <li>{e}</li>
                    ))
                }
                <input onChange={(e)=>setcurrFinish(e.target.value)} value={currFinish} type="text" />
                <button onClick={(e)=>setFinished(...todo,currtodo)}>Add Task</button>
                <button>Delete Task</button>

            </div>

        </div>
    </div>
  )
}

export default Home