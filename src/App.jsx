//import Cart from './Cart';
import Navbar from './Navbar';

import { useEffect } from 'react';

function App()
{
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Hello");
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="App">
            <Navbar />
            Welcome
        </div>
    );
}

export default App;