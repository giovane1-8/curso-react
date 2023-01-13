import React, { useState } from 'react';
import Button from './Button';

import "./AddTask.css"
const AddTask = ({handleTaskAddintion}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        
        setInputData(e.target.value)
    }
    const handleAddTaskClick = () => {
        handleTaskAddintion(inputData)
        setInputData('')
    }
    return (
        <div className='add-task-container'>

            <input type="text" onChange={handleInputChange} value={inputData} className='add-task-input' />
            
            <div className="add-task-button-container">

                <Button onClick={handleAddTaskClick}>Adicionar</Button>

            </div>
        </div>

    );
}

export default AddTask;