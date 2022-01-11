import { useState } from "react";
import "./App.css";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

export default function App() {

  const initialItems = ["Attend Spanish Class",
    "Drop on Admission Application",
    "Water Plants",
    "Make Arangements For Birding Session",
    "Pack The CustomPotrait Order Of Gautham"
  ];

  const [addItem, setAddItem] = useState();
  const [totalItems, setTotalItems] = useState(initialItems);

  const addNewItem = () => {
    setTotalItems([...totalItems, addItem])
  }

  const deleteItem = ({ it }) => {
    setTotalItems(totalItems.filter(fl => fl !== it));
  }

  return (
    <div className="first-container">
      <div class="input">
        <input value={addItem} onChange={(event) => setAddItem(event.target.value)} type="text" placeholder="New Task..."></input>
        <button onClick={addNewItem} >Add Task</button>
      </div>
      <div>
        <ul>
          {totalItems.map(it => <li className="todo-list">☑{it} <CancelRoundedIcon onClick={() => deleteItem({ it })}>cancel</CancelRoundedIcon></li>)}
        </ul>
      </div>
    </div>
  );
}