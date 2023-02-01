import { Link } from "react-router-dom";
function Navbar()
{
    return(
        <div>
            <Link to="/">Home</Link>
            &nbsp;
            |
            &nbsp;
            <Link to="/cart">Cart</Link>
            <Link to="/cart2">Cart2</Link>
            &nbsp;
            &nbsp;
            <Link to="/list">List</Link>
            &nbsp;
            &nbsp;
            <Link to="/cart3">Cart3</Link>
        </div>
    )
}

export default Navbar;