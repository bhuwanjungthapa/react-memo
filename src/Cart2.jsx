import React, { useState, useReducer } from 'react';

const reducer=(state,action)=>{
    //console.log("Inside Reducer.State:"+ state+" Action:"+action);
    switch(action.type)
    {
        case "addItem":
            return{
                ...state,
                cart:[...state.cart,action.payload.item]
            }
        case "removeItem":
            return{
                ...state,
                cart:state.cart.filter(i=>i!==action.payload.item)
            }
        default:
            return state
        
    }
        
    
}
const initialState={
    cart:[]

}
const Cart2 = () => {
    const [item,setItem]=useState("");

    const [state,dispatch]=useReducer(reducer,initialState); 
    const handleChange=(e)=>{
        setItem(e.target.value);
    }
    const addItem=()=>{
        console.log("added");
        dispatch({
            type:"addItem",
            payload:{item}
        });
        setItem("");
    }
    const removeItem=()=>{
        console.log("removed");
        dispatch({
            type:"removeItem",
            payload:{item}
        });
        setItem("");

    }

  return (
    <div>
        <p>{state.cart}</p>
        <input type="text" value={item} onChange={handleChange} />
        <button  onClick = {addItem}>Add</button>
        <button  onClick = {removeItem}>Remove</button>
    </div>
  )
}

export default Cart2;

// import React from 'react'
// import { useReducer } from 'react';
// import { useState } from 'react'

// const reducer = (state, action) => {
//     // console.log("Inside reducer: " + state + " Action: " + action);

//     switch(action.type){
//         case "addItem":
//             return {...state,
//                 cart:[...state.cart, action.payload.item]
//         }

//         case "removeItem":
//             return{
//                 ...state,
//                 cart:state.cart.filter(i => i !== action.payload.item )
//             }
//         default:
//             return state

//     }
// }
   

// const initialState ={
//     cart: []
// }

// const Cart2 = () => {
//     const [item, setItem] = useState("");

//     const [state, dispatch ] = useReducer(reducer, initialState);

//     const handleChange = (e) =>{
//         setItem(e.target.value);
//     }

//     const addItem = () =>{
//         console.log("Added");
//         dispatch({
//             type:"addItem",
//             payload: {item}
//         })
//        // dispatch("Add");
//        // dispatch("Added");
//         setItem("")
//     }
//     const removeItem =() =>{
//         dispatch({
//             type:"removeItem",
//             payload:{
//                 item
//             }
//         })
//     }

//   return (
//     <div>
//         <p>{state}</p>
//         <input value={item} onChange={handleChange} />
//         <button onClick={addItem}>Add</button>
//         <button onClick={removeItem}>Remove</button>
//     </div>
//   )
// }

// export default Cart2