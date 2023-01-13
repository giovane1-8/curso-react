import React from 'react';
import {useNavigate } from "react-router-dom"

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
    const history = useNavigate()
    const handleTaskDetailsClick = () =>{
        history(`/${task.title}`)
    }
    return (
        <div className='task-container'
            style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className='buttons-container'>
                <button
                    onClick={
                        () => handleTaskDeletion(task.id)
                    }
                    className='remove-task-button'>
                    X
                </button>
                <button
                
                    onClick={handleTaskDetailsClick}
                    className='see-task-details-button'>
                    ?
                </button>
            </div>
        </div>
    );
}

export default Task;