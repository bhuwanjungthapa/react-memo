import { useState } from "react"
import { useMemo } from "react";
import Navbar from "./Navbar";

import Item from "./Item";
import { useCallback } from "react";

function Cart({items})
{
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState("");

   // const [count, setCount] = useState(0);

    const handleChange = (e) => {
        const { value } = e.target;
        setItem(value);
    }

    const addItem = () => {
        setCart([...cart, item]);
        setItem("");
    }

    // const addNewItem = () =>{
    //     setCart([...cart, "New Item"])
    // }

    const addNewItem = useCallback(() =>{
        setCart([...cart, "New Item"])
    }, [cart])


    //const count = cart.length

    const getMsg = (count) => {
        for(let i=0;i< 1000;i++){
            console.log("Waiting!!!");
        }
        return "Item in cart: " +count;
    }

    const msg = useMemo( () => getMsg(cart.length), [cart]);


    return(
        <div>
            <Navbar />
            <h1>Cart</h1>

            <p>hh {msg}</p>

            {/* <p>Items in cart: {cart.length}</p> */}

            <div>
                <h3>Item List</h3>
                <Item items={cart} handle ={addNewItem} />
            </div>

            <input type="text" placeholder="Cart Item..." onChange={handleChange} value={item} />
            <button onClick={addItem}>Add Item</button>


            {/* <hr /> */}

            {/* <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> */}
        </div>
    )
}

export default Cart;