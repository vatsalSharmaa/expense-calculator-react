import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'; 

const ExpenseItem=(props)=>{

   const [title,setTitle] = useState(props.title); // react hook has use in the name


    // function clickHandler() {}
    const clickHandler = () =>{
setTitle('Updated');
   console.log(title);
    };


return (
<Card className="expense-item">
    <ExpenseDate date={props.date}/>
<div className="expense-item__description">
    <h2>{props.title}</h2>
    <div className="expense-item__price">${props.amount}</div>
</div>
<button onClick ={clickHandler}>change title</button>
    </Card>
    );
}
 
export default ExpenseItem;