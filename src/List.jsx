import { memo } from "react";

function List({items})
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
        </div>
    )
}

export default memo(List);