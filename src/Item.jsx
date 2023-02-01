import { memo } from "react";

function Item({items, handle})
{
    console.log("Item Rendered");
    return(
        <div>
            <ul>
                {
                    items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={handle}>Add new item</button>
        </div>
    )
}

export default memo(Item);