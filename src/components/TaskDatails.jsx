import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Button from './Button'
import "./TaskDatails.css"
const TaskDatails = () => {

    const params = useParams()

    const history = useNavigate()
    const handleBackbottonClick = () =>{
        history("./..")
    }
    return (
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackbottonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio error, odit quos voluptas, praesentium eligendi aliquam temporibus vel amet nisi libero aliquid illo voluptatem. Quod assumenda maiores rem facilis corrupti.
                </p>
            </div>
        </>
    );
}

export default TaskDatails;